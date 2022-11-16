/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Job } from '../models/Job';
import type { PaginatedJobList } from '../models/PaginatedJobList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class JobsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of `Job` objects.
     * @returns PaginatedJobList
     * @throws ApiError
     */
    public jobsList({
        xAccountToken,
        code,
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
        status,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        /**
         * If provided, will only return jobs with this code.
         */
        code?: string | null,
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
        expand?: 'departments' | 'departments,hiring_managers' | 'departments,offices' | 'departments,offices,hiring_managers' | 'hiring_managers' | 'offices' | 'offices,hiring_managers',
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
        /**
         * If provided, will only return jobs with this status. Options: ('OPEN', 'CLOSED', 'DRAFT', 'ARCHIVED', 'PENDING')
         */
        status?: 'ARCHIVED' | 'CLOSED' | 'DRAFT' | 'OPEN' | 'PENDING' | null,
    }): CancelablePromise<PaginatedJobList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/jobs',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'code': code,
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
                'status': status,
            },
        });
    }

    /**
     * Returns a `Job` object with the given `id`.
     * @returns Job
     * @throws ApiError
     */
    public jobsRetrieve({
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
        expand?: 'departments' | 'departments,hiring_managers' | 'departments,offices' | 'departments,offices,hiring_managers' | 'hiring_managers' | 'offices' | 'offices,hiring_managers',
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
    }): CancelablePromise<Job> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/jobs/{id}',
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
