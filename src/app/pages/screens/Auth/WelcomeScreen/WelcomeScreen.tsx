import React, { ReactElement } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { View, Button, Image } from 'react-native-ui-lib';

import { ScrollView } from 'react-native-gesture-handler';

import { AuthStackParamList } from '@shared/types/types';

export default function WelcomeScreen({
    navigation,
}: StackScreenProps<AuthStackParamList, 'Welcome'>): ReactElement {
    const { t } = useTranslation();

    return (
        <View flex useSafeArea bg-surfaceColor>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'flex-start',
                }}
            >
                <View
                    paddingH-16
                    marginV-20
                    flex
                    style={{
                        justifyContent: 'space-between',
                    }}
                >
                    <View>
                        <Button
                            text70M
                            bg-primary50
                            primaryColor
                            label={t('Language')}
                            iconSource={require('assets/icons/language.png')}
                            iconStyle={{
                                height: 18,
                                resizeMode: 'contain',
                            }}
                            borderRadius={8}
                            onPress={() =>
                                navigation.navigate('SelectLanguage')
                            }
                            animateLayout
                            // @ts-ignore
                            animateTo={'left'}
                        />
                    </View>

                    <View center>
                        <Image source={require('assets/logo.png')} />
                    </View>
                    <View>
                        <Button
                            label={t('Login to system')}
                            bg-primaryColor
                            text10
                            style={{ height: 56, marginTop: 8 }}
                            onPress={() => navigation.navigate('Auth')}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
