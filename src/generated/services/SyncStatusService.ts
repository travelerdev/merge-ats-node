/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSyncStatusList } from '../models/PaginatedSyncStatusList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SyncStatusService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `SYNCING`
     * @returns PaginatedSyncStatusList
     * @throws ApiError
     */
    public syncStatusList({
        xAccountToken,
        cursor,
        pageSize,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        /**
         * The pagination cursor value.
         */
        cursor?: string,
        /**
         * Number of results to return per page.
         */
        pageSize?: number,
    }): CancelablePromise<PaginatedSyncStatusList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sync-status',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'cursor': cursor,
                'page_size': pageSize,
            },
        });
    }

}
