import httpClient from '@http/httpClient';

import { APIS } from '@constants/apis';

type Service = {
    getServicesByUser: (id: number) => Promise<any>;
};

export default function useServiceService(): Service {
    async function getServicesByUser(id: number): Promise<any> {
        try {
            return (await httpClient.get<any>(APIS.service)).data;
        } catch (e) {}
    }

    return {
        getServicesByUser,
    };
}
