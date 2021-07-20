import httpClient from '@http/httpClient';

import { COMPANY_API } from '@constants/apis';

type Service = {
    getCompanies: () => Promise<any>;
};

export default function useCompanyService(): Service {
    async function getCompanies(): Promise<any> {
        try {
            return (
              await httpClient.get<any>(COMPANY_API.default)
            ).data;
        } catch (e) {
        }
    }

    return {
        getCompanies,
    };
}
