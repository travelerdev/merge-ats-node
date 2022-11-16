/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Offer } from '../models/Offer';
import type { PaginatedOfferList } from '../models/PaginatedOfferList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OffersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of `Offer` objects.
     * @returns PaginatedOfferList
     * @throws ApiError
     */
    public offersList({
        xAccountToken,
        applicationId,
        createdAfter,
        createdBefore,
        creatorId,
        cursor,
        expand,
        includeDeletedData,
        includeRemoteData,
        modifiedAfter,
        modifiedBefore,
        pageSize,
        remoteId,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        /**
         * If provided, will only return offers for this application.
         */
        applicationId?: string,
        /**
         * If provided, will only return objects created after this datetime.
         */
        createdAfter?: string,
        /**
         * If provided, will only return objects created before this datetime.
         */
        createdBefore?: string,
        /**
         * If provided, will only return offers created by this user.
         */
        creatorId?: string,
        /**
         * The pagination cursor value.
         */
        cursor?: string,
        /**
         * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
         */
        expand?: 'application' | 'application,creator' | 'creator',
        /**
         * Whether to include data that was deleted in the third-party service.
         */
        includeDeletedData?: boolean,
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
        /**
         * If provided, will only return objects modified after this datetime.
         */
        modifiedAfter?: string,
        /**
         * If provided, will only return objects modified before this datetime.
         */
        modifiedBefore?: string,
        /**
         * Number of results to return per page.
         */
        pageSize?: number,
        /**
         * The API provider's ID for the given object.
         */
        remoteId?: string | null,
    }): CancelablePromise<PaginatedOfferList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/offers',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'application_id': applicationId,
                'created_after': createdAfter,
                'created_before': createdBefore,
                'creator_id': creatorId,
                'cursor': cursor,
                'expand': expand,
                'include_deleted_data': includeDeletedData,
                'include_remote_data': includeRemoteData,
                'modified_after': modifiedAfter,
                'modified_before': modifiedBefore,
                'page_size': pageSize,
                'remote_id': remoteId,
            },
        });
    }

    /**
     * Returns an `Offer` object with the given `id`.
     * @returns Offer
     * @throws ApiError
     */
    public offersRetrieve({
        xAccountToken,
        id,
        expand,
        includeRemoteData,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        id: string,
        /**
         * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
         */
        expand?: 'application' | 'application,creator' | 'creator',
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
    }): CancelablePromise<Offer> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/offers/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'expand': expand,
                'include_remote_data': includeRemoteData,
            },
        });
    }

}
