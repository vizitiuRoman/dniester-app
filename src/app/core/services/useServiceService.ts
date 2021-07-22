import httpClient from '@http/httpClient';

import { SERVICE_API } from '@constants/apis';
import { getAuthHeaders } from '@shared/utils/utils';

type Service = {
    getServices: () => Promise<any>;
};

export default function useServiceService(): Service {
    async function getServices(): Promise<any> {
        try {
            return (
                await httpClient.get<any>(SERVICE_API.default, {
                    headers: await getAuthHeaders(),
                })
            ).data;
        } catch (e) {}
    }

    return {
        getServices,
    };
}
