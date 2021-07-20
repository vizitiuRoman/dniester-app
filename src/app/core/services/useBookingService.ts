import httpClient from '@http/httpClient';

import { BOOKING_API } from '@constants/apis';

type Service = {
    getBookings: () => Promise<any>;
};

export default function useBookingService(): Service {
    async function getBookings(): Promise<any> {
        try {
            return (await httpClient.get<any>(BOOKING_API.default)).data;
        } catch (e) {}
    }

    return {
        getBookings,
    };
}
