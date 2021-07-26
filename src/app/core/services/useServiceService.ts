import httpClient from '@http/httpClient';

import { SERVICE_API } from '@constants/apis';
import { ServiceModel } from '@shared/models/service.model';
import { getAuthHeaders } from '@shared/utils/utils';

type Service = {
    getServices: () => Promise<ServiceModel[]>;
    getFavoriteServices: () => Promise<ServiceModel[]>;
    getService: (id: string) => Promise<ServiceModel>;
};

export default function useServiceService(): Service {
    async function getServices(): Promise<ServiceModel[]> {
        try {
            return (
                await httpClient.get<ServiceModel[]>(SERVICE_API.default, {
                    headers: await getAuthHeaders(),
                })
            ).data;
        } catch (e) {
            throw e;
        }
    }

    async function getFavoriteServices(): Promise<ServiceModel[]> {
        try {
            return (
                await httpClient.get<ServiceModel[]>(SERVICE_API.favorites, {
                    headers: await getAuthHeaders(),
                })
            ).data;
        } catch (e) {
            throw e;
        }
    }

    async function getService(id: string): Promise<ServiceModel> {
        try {
            return (
                await httpClient.get<ServiceModel>(
                    `${SERVICE_API.default}/${id}`,
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
        getServices,
        getFavoriteServices,
        getService,
    };
}
