import React, { ReactElement } from 'react';
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';

import { SettingsStackParamList } from '@shared/types/types';
import SelectLanguageScreen from '@screens/SelectLanguageScreen/SelectLanguageScreen';
import SettingsScreen from '@screens/Main/SettingsScreen/SettingsScreen';

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export default function SettingsNavigator(): ReactElement {
    const { t } = useTranslation();

    return (
        <SettingsStack.Navigator
            initialRouteName={'Settings'}
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
                headerRightContainerStyle: { marginRight: 16 },
                gestureEnabled: true,
                cardOverlayEnabled: true,
                headerStatusBarHeight: Platform.OS === 'ios' ? 16 : 8,
                ...TransitionPresets.DefaultTransition,
            }}
        >
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerTitle: t('Settings'),
                }}
            />
            <SettingsStack.Screen
                name="SelectLanguage"
                component={SelectLanguageScreen}
                options={{
                    headerTitle: t('Select language'),
                }}
            />
        </SettingsStack.Navigator>
    );
}
