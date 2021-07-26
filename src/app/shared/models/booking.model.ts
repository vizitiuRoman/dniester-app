import { BaseModel } from '@shared/models/base.model';

export type BookingModel = BaseModel<string> & {
    companyId: string;
    staffId: string;
    userId: string;
    serviceId: string;
};
