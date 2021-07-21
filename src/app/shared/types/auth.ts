export type AuthPayload = {
    email: string;
    password: string;
    deviceToken: string;
};

export type RegisterPayload = AuthPayload & {
    name: string;
    lastName: string;
};
