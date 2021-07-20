import httpClient from '@http/httpClient';

import { APIS } from '@constants/apis';

type Service = {
    getBookings: () => Promise<any>;
};

export default function useBookingService(): Service {
    async function getBookings(): Promise<any> {
        try {
            return (
                await httpClient.get<any>(
                    APIS.booking
                )
            ).data;
        } catch (e) {}
    }

    return {
        getBookings,
    };
}
