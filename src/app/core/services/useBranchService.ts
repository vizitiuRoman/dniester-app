import httpClient from '@http/httpClient';

import { BRANCH_API } from '@constants/apis';
import { BranchModel } from '@shared/models/branch.model';
import { getAuthHeaders } from '@shared/utils/utils';

type Service = {
    getBranches: () => Promise<BranchModel[]>;
    getBranch: (id: string) => Promise<BranchModel>;
};

export default function useBranchService(): Service {
    async function getBranches(): Promise<BranchModel[]> {
        try {
            return (
                await httpClient.get<BranchModel[]>(BRANCH_API.default, {
                    headers: await getAuthHeaders(),
                })
            ).data;
        } catch (e) {
            throw e;
        }
    }

    async function getBranch(id: string): Promise<BranchModel> {
        try {
            return (
                await httpClient.get<BranchModel>(
                    `${BRANCH_API.default}/${id}`,
                    {
                        headers: await getAuthHeaders(),
                    }
                )
            ).data;
        } catch (e) {
            throw e;
        }
    }

    return {
        getBranches,
        getBranch,
    };
}
