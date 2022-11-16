/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EEOC } from '../models/EEOC';
import type { PaginatedEEOCList } from '../models/PaginatedEEOCList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EeocsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of `EEOC` objects.
     * @returns PaginatedEEOCList
     * @throws ApiError
     */
    public eeocsList({
        xAccountToken,
        candidateId,
        createdAfter,
        createdBefore,
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
         * If provided, will only return EEOC info for this candidate.
         */
        candidateId?: string,
        /**
         * If provided, will only return objects created after this datetime.
         */
        createdAfter?: string,
        /**
         * If provided, will only return objects created before this datetime.
         */
        createdBefore?: string,
        /**
         * The pagination cursor value.
         */
        cursor?: string,
        /**
         * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
         */
        expand?: 'candidate',
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
    }): CancelablePromise<PaginatedEEOCList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/eeocs',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'candidate_id': candidateId,
                'created_after': createdAfter,
                'created_before': createdBefore,
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
     * Returns an `EEOC` object with the given `id`.
     * @returns EEOC
     * @throws ApiError
     */
    public eeocsRetrieve({
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
        expand?: 'candidate',
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
    }): CancelablePromise<EEOC> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/eeocs/{id}',
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
