import { BaseModel } from '@shared/models/base.model';

export type UserModel = BaseModel<string> & {
    name: string;
    lastName: string;
    email: string;
    password: string;
};
