import { BaseModel } from '@shared/models/base.model';
import { BranchModel } from '@shared/models/branch.model';

export type ServiceModel = BaseModel<string> & {
    name: string;
    companyId: string;
    branches?: BranchModel[]
};
