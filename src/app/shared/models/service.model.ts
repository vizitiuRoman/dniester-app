import { BaseModel } from '@shared/models/base.model';

export type ServiceModel = BaseModel<string> & {
    name: string;
    companyId: string;
};
