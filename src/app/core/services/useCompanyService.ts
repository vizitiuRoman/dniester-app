import httpClient from '@http/httpClient';

import { COMPANY_API } from '@constants/apis';
import { CompanyModel } from '@shared/models/company.model';
import { getAuthHeaders } from '@shared/utils/utils';

type Service = {
    getCompanies: () => Promise<CompanyModel[]>;
};

export default function useCompanyService(): Service {
    async function getCompanies(): Promise<CompanyModel[]> {
        try {
            return (
                await httpClient.get<CompanyModel[]>(COMPANY_API.default, {
                    headers: await getAuthHeaders(),
                })
            ).data;
        } catch (e) {
            throw e;
        }
    }

    return {
        getCompanies,
    };
}
