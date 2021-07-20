import React, { ReactElement, useContext, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { View } from 'react-native-ui-lib';
import {
    initialWindowMetrics,
    SafeAreaProvider,
} from 'react-native-safe-area-context';

import { AuthContext } from '@contexts/AuthContext';
import Navigation from '@navigations/Navigation';
import useTheme from '@hooks/useTheme';

export default function App(): ReactElement | null {
    const { signed, loading: authLoading } = useContext(AuthContext);
    const { loadTheme, loading } = useTheme();

    useEffect(() => {
        loadTheme();
    }, [loadTheme]);

    if (authLoading && loading) {
        return null;
    }

    return (
        <View flex>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <StatusBar />
                <Navigation signed={signed} loading={authLoading} />
            </SafeAreaProvider>
        </View>
    );
}
