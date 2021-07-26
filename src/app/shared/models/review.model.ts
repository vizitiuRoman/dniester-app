import { BaseModel } from '@shared/models/base.model';

export type ReviewModel = BaseModel<string> & {
    name: string;
};
