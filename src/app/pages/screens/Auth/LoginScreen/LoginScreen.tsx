import React, {
    ReactElement,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
    BorderRadiuses,
    Colors,
    View,
    Image,
    Button,
    Text,
    Typography,
} from 'react-native-ui-lib';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

import { AuthStackParamList, LoginForm } from '@shared/types/types';
import { AuthContext } from '@contexts/AuthContext';

export default function LoginScreen({
    navigation,
}: StackScreenProps<AuthStackParamList, 'Login'>): ReactElement {
    const { login } = useContext(AuthContext);
    const { t } = useTranslation();

    // const [target, setTarget] = useState<string | undefined>(undefined);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [state, setState] = useState<LoginForm>({
        email: {
            value: '',
            error: '',
            isValid: true,
        },
        password: {
            value: '',
            error: '',
            isValid: true,
        },
    });
    const inputElementRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
        inputElementRef.current.setNativeProps({
            style: { ...Typography.text70 },
        });
    }, []);

    function clearInput(type: 'email' | 'password'): void {
        setState({
            ...state,
            [type]: {
                value: '',
                error: '',
                isValid: true,
            },
        });
    }

    function handleInput(text: string, type: 'email' | 'password'): void {
        setState({
            ...state,
            [type]: text,
        });

        if (text.length > 4) {
            setState({
                ...state,
                [type]: {
                    value: text,
                    isValid: true,
                    error: '',
                },
            });
            return;
        } else if (!text.length) {
            setState({
                ...state,
                [type]: {
                    value: text,
                    isValid: true,
                    error: '',
                },
            });
            return;
        }
        setState(() => ({
            ...state,
            [type]: {
                value: text,
                isValid: false,
                error: `${t('Min 4 characters')} ${text.length}`,
            },
        }));
    }

    async function onSubmit(): Promise<void> {
        try {
            try {
                // const authorizationStatus = await messaging().requestPermission();
                // if (!authorizationStatus) {
                //     await messaging().requestPermission();
                // }
                //
                // setTarget(await messaging().getToken());
            } catch (err) {}

            await login({
                email: state.email.value,
                password: state.password.value,
                deviceToken: 'MOCK',
            });
        } catch (err) {}
    }

    return (
        <View flex useSafeArea bg-surfaceColor>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignContent: 'center',
                }}
            >
                <KeyboardAvoidingView enabled>
                    <View flex width={'100%'} paddingH-16>
                        <View marginV-48 center>
                            <Image source={require('assets/logo.png')} />
                        </View>

                        <View marginB-16>
                            <View>
                                <Text marginB-8 text40SB grey10>
                                    {t('Email')}
                                </Text>
                                <View style={styles.inputStyle}>
                                    <View flex>
                                        <TextInput
                                            style={{
                                                ...Typography.text70,
                                            }}
                                            placeholder={t('Enter email')}
                                            value={state.email.value}
                                            onChangeText={(text: string) =>
                                                handleInput(text, 'email')
                                            }
                                        />
                                    </View>
                                    {!!state.email.value && (
                                        <View marginL-8>
                                            <Button
                                                s2
                                                s
                                                link
                                                iconSource={require('assets/icons/xmark-circle.png')}
                                                onPress={() =>
                                                    clearInput('email')
                                                }
                                                style={{
                                                    padding: 0,
                                                    margin: 0,
                                                }}
                                                iconStyle={{
                                                    tintColor: Colors.grey40,
                                                }}
                                            />
                                        </View>
                                    )}
                                </View>
                                {!state.email.isValid && (
                                    <Text marginT-8 red20>
                                        {state.email.error}
                                    </Text>
                                )}
                            </View>
                        </View>

                        <View marginB-16>
                            <View>
                                <Text marginB-8 text40SB grey10>
                                    {t('Password')}
                                </Text>
                                <View style={styles.inputStyle}>
                                    <View flex-1>
                                        <TextInput
                                            ref={inputElementRef}
                                            secureTextEntry={!showPassword}
                                            placeholder={t('Enter password')}
                                            value={state.password.value}
                                            onChangeText={(text: string) =>
                                                handleInput(text, 'password')
                                            }
                                        />
                                    </View>
                                    {!!state.password.value && (
                                        <View marginL-8>
                                            <Button
                                                s2
                                                link
                                                iconSource={
                                                    showPassword
                                                        ? require('assets/icons/hide_pw.png')
                                                        : require('assets/icons/show_pw.png')
                                                }
                                                onPress={() =>
                                                    setShowPassword(
                                                        (show) => !show
                                                    )
                                                }
                                                style={{
                                                    padding: 0,
                                                    margin: 0,
                                                }}
                                                iconStyle={{
                                                    tintColor: Colors.grey40,
                                                }}
                                            />
                                        </View>
                                    )}
                                </View>
                                {!state.password.isValid && (
                                    <Text marginT-8 red20>
                                        {state.password.error}
                                    </Text>
                                )}
                            </View>
                        </View>

                        <Button
                            onPress={onSubmit}
                            label={t('Sign In')}
                            bg-primaryColor
                            text10
                            grey70
                            style={{
                                height: 56,
                            }}
                        >
                            <Image
                                source={require('assets/icons/Vector.png')}
                                marginR-8
                            />
                        </Button>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View flex>
                <Button
                    marginT-16
                    link
                    label={t(`Don't have an account yet? Register now`)}
                    primaryColor
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: Colors.grey60,
        borderRadius: BorderRadiuses.br40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 44,
    },
    container: {
        flex: 1,
    },
});
