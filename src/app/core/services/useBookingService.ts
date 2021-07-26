import httpClient from '@http/httpClient';

import { BOOKING_API } from '@constants/apis';
import { BookingModel } from '@shared/models/booking.model';
import { getAuthHeaders } from '@shared/utils/utils';

type Service = {
    getBookings: () => Promise<BookingModel[]>;
    getBooking: (id: string) => Promise<BookingModel>;
};

export default function useBookingService(): Service {
    async function getBookings(): Promise<BookingModel[]> {
        try {
            return (
                await httpClient.get<BookingModel[]>(BOOKING_API.default, {
                    headers: await getAuthHeaders(),
                })
            ).data;
        } catch (e) {
            throw e;
        }
    }

    async function getBooking(id: string): Promise<BookingModel> {
        try {
            return (
                await httpClient.get<BookingModel>(
                    `${BOOKING_API.default}/${id}`,
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
        getBookings,
        getBooking,
    };
}
