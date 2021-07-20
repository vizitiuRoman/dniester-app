import React, { ReactElement, useContext } from 'react';
import { StatusBar } from 'react-native';
import {
    initialWindowMetrics,
    SafeAreaProvider,
} from 'react-native-safe-area-context';

import Navigation from '@navigations/Navigation';
import { AuthContext } from '@contexts/AuthContext';

export default function App(): ReactElement | null {
    const { signed, loading: authLoading } = useContext(AuthContext);

    if (authLoading) {
        return null;
    }

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <StatusBar />
            <Navigation signed={signed} loading={authLoading} />
        </SafeAreaProvider>
    );
}
