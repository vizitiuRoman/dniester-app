import { ServiceModel } from '@shared/models/service.model';
import { UserModel } from '@shared/models/user.model';

export type RootStackParamList = {
    Notifications: undefined;
    Settings: undefined;
    Services: undefined;
    Service: undefined;
};

export type AuthStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    SelectLanguage: undefined;
};

export type ServicesStackParamList = {
    Services: undefined;
    Service: {
        service: ServiceModel;
    };
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
    user: UserModel;
};
