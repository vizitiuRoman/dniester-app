import httpClient from '@http/httpClient';

import { REVIEW_API } from '@constants/apis';
import { ReviewModel } from '@shared/models/review.model';
import { getAuthHeaders } from '@shared/utils/utils';

type Service = {
    getReviews: () => Promise<ReviewModel[]>;
    getReview: (id: string) => Promise<ReviewModel>;
};

export default function useReviewService(): Service {
    async function getReviews(): Promise<ReviewModel[]> {
        try {
            return (
                await httpClient.get<ReviewModel[]>(REVIEW_API.default, {
                    headers: await getAuthHeaders(),
                })
            ).data;
        } catch (e) {
            throw e;
        }
    }

    async function getReview(id: string): Promise<ReviewModel> {
        try {
            return (
                await httpClient.get<ReviewModel>(
                    `${REVIEW_API.default}/${id}`,
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
        getReviews,
        getReview,
    };
}
