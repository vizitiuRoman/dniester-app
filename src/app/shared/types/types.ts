export type RootStackParamList = {
    Notifications: undefined;
    Services: undefined;
};

export type AuthStackParamList = {
    Welcome: undefined;
    Auth: undefined;
    SelectLanguage: undefined;
};

export type FormInput = {
    value: string;
    isValid: boolean;
    error: string;
};

export type LoginForm = {
    login: FormInput;
    password: FormInput;
};