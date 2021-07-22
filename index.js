import React from 'react';
import { AppRegistry } from 'react-native';

import { AuthProvider } from '@contexts/AuthContext';

import { name as appName } from './app.json';
import App from './src/app/App';
import './src/app/shared/i18n/i18n';

function app() {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    );
}

AppRegistry.registerComponent(appName, () => app);
