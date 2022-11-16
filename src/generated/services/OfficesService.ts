/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Office } from '../models/Office';
import type { PaginatedOfficeList } from '../models/PaginatedOfficeList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OfficesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of `Office` objects.
     * @returns PaginatedOfficeList
     * @throws ApiError
     */
    public officesList({
        xAccountToken,
        createdAfter,
        createdBefore,
        cursor,
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
    }): CancelablePromise<PaginatedOfficeList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/offices',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'created_after': createdAfter,
                'created_before': createdBefore,
                'cursor': cursor,
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
     * Returns an `Office` object with the given `id`.
     * @returns Office
     * @throws ApiError
     */
    public officesRetrieve({
        xAccountToken,
        id,
        includeRemoteData,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        id: string,
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
    }): CancelablePromise<Office> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/offices/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'include_remote_data': includeRemoteData,
            },
        });
    }

}
