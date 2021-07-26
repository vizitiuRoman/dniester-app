import { BaseModel } from '@shared/models/base.model';

export type CompanyModel = BaseModel<string> & {
    fullName: string;
};
