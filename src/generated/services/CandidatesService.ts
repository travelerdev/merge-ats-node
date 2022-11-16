/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Candidate } from '../models/Candidate';
import type { CandidateEndpointRequest } from '../models/CandidateEndpointRequest';
import type { CandidateResponse } from '../models/CandidateResponse';
import type { IgnoreCommonModel } from '../models/IgnoreCommonModel';
import type { IgnoreCommonModelRequest } from '../models/IgnoreCommonModelRequest';
import type { MetaResponse } from '../models/MetaResponse';
import type { PaginatedCandidateList } from '../models/PaginatedCandidateList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CandidatesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of `Candidate` objects.
     * @returns PaginatedCandidateList
     * @throws ApiError
     */
    public candidatesList({
        xAccountToken,
        createdAfter,
        createdBefore,
        cursor,
        expand,
        firstName,
        includeDeletedData,
        includeRemoteData,
        lastName,
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
         * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
         */
        expand?: 'applications' | 'applications,attachments' | 'attachments',
        /**
         * If provided, will only return candidates with this first name.
         */
        firstName?: string | null,
        /**
         * Whether to include data that was deleted in the third-party service.
         */
        includeDeletedData?: boolean,
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
        /**
         * If provided, will only return candidates with this last name.
         */
        lastName?: string | null,
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
    }): CancelablePromise<PaginatedCandidateList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/candidates',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'created_after': createdAfter,
                'created_before': createdBefore,
                'cursor': cursor,
                'expand': expand,
                'first_name': firstName,
                'include_deleted_data': includeDeletedData,
                'include_remote_data': includeRemoteData,
                'last_name': lastName,
                'modified_after': modifiedAfter,
                'modified_before': modifiedBefore,
                'page_size': pageSize,
                'remote_id': remoteId,
            },
        });
    }

    /**
     * Creates a `Candidate` object with the given values.
     * @returns CandidateResponse
     * @throws ApiError
     */
    public candidatesCreate({
        xAccountToken,
        requestBody,
        isDebugMode,
        runAsync,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        requestBody: CandidateEndpointRequest,
        /**
         * Whether to include debug fields (such as log file links) in the response.
         */
        isDebugMode?: boolean,
        /**
         * Whether or not third-party updates should be run asynchronously.
         */
        runAsync?: boolean,
    }): CancelablePromise<CandidateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/candidates',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'is_debug_mode': isDebugMode,
                'run_async': runAsync,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Returns a `Candidate` object with the given `id`.
     * @returns Candidate
     * @throws ApiError
     */
    public candidatesRetrieve({
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
        expand?: 'applications' | 'applications,attachments' | 'attachments',
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
    }): CancelablePromise<Candidate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/candidates/{id}',
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

    /**
     * Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
     * @returns IgnoreCommonModel
     * @throws ApiError
     */
    public candidatesIgnoreCreate({
        modelId,
        requestBody,
    }: {
        modelId: string,
        requestBody: IgnoreCommonModelRequest,
    }): CancelablePromise<IgnoreCommonModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/candidates/ignore/{model_id}',
            path: {
                'model_id': modelId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Returns metadata for `Candidate` POSTs.
     * @returns MetaResponse
     * @throws ApiError
     */
    public candidatesMetaPostRetrieve({
        xAccountToken,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
    }): CancelablePromise<MetaResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/candidates/meta/post',
            headers: {
                'X-Account-Token': xAccountToken,
            },
        });
    }

}
