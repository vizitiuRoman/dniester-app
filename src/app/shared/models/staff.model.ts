import { BaseModel } from '@shared/models/base.model';

export type StaffModel = BaseModel<string> & {
    companyId: string;
    name: string;
};
