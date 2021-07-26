import { BaseModel } from '@shared/models/base.model';

export type BranchModel = BaseModel<string> & {
    name: string;
};
