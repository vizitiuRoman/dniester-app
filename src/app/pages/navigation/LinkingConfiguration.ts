export default {
    prefixes: ['https://olimpbooking.com', 'olimpbooking://'],
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
                },
            },
        },
    },
};
