import httpClient from '@http/httpClient';

import { STAFF_API } from '@constants/apis';
import { StaffModel } from '@shared/models/staff.model';
import { getAuthHeaders } from '@shared/utils/utils';

type Service = {
    getStaffs: () => Promise<StaffModel[]>;
    getStaff: (id: string) => Promise<StaffModel>;
};

export default function useStaffService(): Service {
    async function getStaffs(): Promise<StaffModel[]> {
        try {
            return (
                await httpClient.get<StaffModel[]>(STAFF_API.default, {
                    headers: await getAuthHeaders(),
                })
            ).data;
        } catch (e) {
            throw e;
        }
    }

    async function getStaff(id: string): Promise<StaffModel> {
        try {
            return (
                await httpClient.get<StaffModel>(`${STAFF_API.default}/${id}`, {
                    headers: await getAuthHeaders(),
                })
            ).data;
        } catch (e) {
            throw e;
        }
    }

    return {
        getStaffs,
        getStaff,
    };
}
