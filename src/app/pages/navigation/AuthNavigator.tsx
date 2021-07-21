import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthStackParamList } from '@shared/types/types';
import LoginScreen from '@screens/Auth/LoginScreen/LoginScreen';
import WelcomeScreen from '@screens/Auth/WelcomeScreen/WelcomeScreen';
import SelectLanguageScreen from '@screens/SelectLanguageScreen/SelectLanguageScreen';
import RegisterScreen from '@screens/Auth/RegisterScreen/RegisterScreen';

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigator(): ReactElement {
    return (
        <AuthStack.Navigator
            initialRouteName={'Welcome'}
            screenOptions={{
                headerStyle: {
                    shadowColor: 'transparent',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                        width: 0,
                    },
                    elevation: 0,
                },
            }}
        >
            <AuthStack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: true,
                    headerTitle: '',
                }}
            />
            <AuthStack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerShown: true,
                    headerTitle: '',
                }}
            />
            <AuthStack.Screen
                name="SelectLanguage"
                component={SelectLanguageScreen}
                options={{
                    headerTitle: '',
                }}
            />
        </AuthStack.Navigator>
    );
}
