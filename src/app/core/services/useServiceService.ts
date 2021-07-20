import httpClient from '@http/httpClient';

import { SERVICE_API } from '@constants/apis';

type Service = {
    getServicesByUser: (id: number) => Promise<any>;
};

export default function useServiceService(): Service {
    async function getServicesByUser(id: number): Promise<any> {
        try {
            return (await httpClient.get<any>(SERVICE_API.default)).data;
        } catch (e) {}
    }

    return {
        getServicesByUser,
    };
}
