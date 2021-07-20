import httpClient from '@http/httpClient';

import { APIS } from '@constants/apis';

type Service = {
    getCompanies: () => Promise<any>;
};

export default function useCompanyService(): Service {
    async function getCompanies(): Promise<any> {
        try {
            return (
              await httpClient.get<any>(APIS.company)
            ).data;
        } catch (e) {
        }
    }

    return {
        getCompanies,
    };
}
