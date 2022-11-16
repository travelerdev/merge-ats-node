/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedRemoteUserList } from '../models/PaginatedRemoteUserList';
import type { RemoteUser } from '../models/RemoteUser';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of `RemoteUser` objects.
     * @returns PaginatedRemoteUserList
     * @throws ApiError
     */
    public usersList({
        xAccountToken,
        createdAfter,
        createdBefore,
        cursor,
        email,
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
         * If provided, will only return remote users with the given email address
         */
        email?: string | null,
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
    }): CancelablePromise<PaginatedRemoteUserList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'created_after': createdAfter,
                'created_before': createdBefore,
                'cursor': cursor,
                'email': email,
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
     * Returns a `RemoteUser` object with the given `id`.
     * @returns RemoteUser
     * @throws ApiError
     */
    public usersRetrieve({
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
    }): CancelablePromise<RemoteUser> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{id}',
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
