export default {
    prefixes: ['https://dniester.com', 'dniester://'],
    config: {
        screens: {
            Root: {
                Notifications: {
                    screens: {
                        NotificationsScreen: 'notification',
                    },
                },
                Services: {
                    screens: {
                        ServicesScreen: 'services',
                    },
                },
                Service: {
                    screens: {
                        ServiceScreen: 'service',
                    },
                },
                Settings: {
                    screens: {
                        Settings: {
                            screens: {
                                SettingsScreen: 'settings',
                            },
                        },
                        SelectLanguage: {
                            screens: {
                                SelectLanguageScreen: 'select language',
                            },
                        },
                    },
                },
            },
            Auth: {
                screens: {
                    Welcome: {
                        screens: {
                            WelcomeScreen: 'welcome',
                        },
                    },
                    LoginScreen: {
                        screens: {
                            WelcomeScreen: 'login screen',
                        },
                    },
                    RegisterScreen: {
                        screens: {
                            WelcomeScreen: 'register screen',
                        },
                    },
                },
            },
        },
    },
};
