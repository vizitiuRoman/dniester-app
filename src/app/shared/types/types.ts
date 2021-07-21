import { User } from '@shared/models/user';

export type RootStackParamList = {
    Notifications: undefined;
    Settings: undefined;
    Services: undefined;
};

export type AuthStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    SelectLanguage: undefined;
};

export type SettingsStackParamList = {
    Settings: undefined;
    SelectLanguage: undefined;
};

export type SettingsParamList = {
    SelectLanguage: undefined;
};

export type FormInput = {
    value: string;
    isValid: boolean;
    error: string;
};

export type LoginForm = {
    email: FormInput;
    password: FormInput;
};

export type RegisterForm = {
    name: FormInput;
    lastName: FormInput;
    email: FormInput;
    password: FormInput;
};

export type AuthData = {
    token: {
        accessToken: string;
    };
    user: User;
};
