/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Application } from '../models/Application';
import type { ApplicationEndpointRequest } from '../models/ApplicationEndpointRequest';
import type { ApplicationResponse } from '../models/ApplicationResponse';
import type { MetaResponse } from '../models/MetaResponse';
import type { PaginatedApplicationList } from '../models/PaginatedApplicationList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApplicationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of `Application` objects.
     * @returns PaginatedApplicationList
     * @throws ApiError
     */
    public applicationsList({
        xAccountToken,
        candidateId,
        createdAfter,
        createdBefore,
        creditedToId,
        currentStageId,
        cursor,
        expand,
        includeDeletedData,
        includeRemoteData,
        jobId,
        modifiedAfter,
        modifiedBefore,
        pageSize,
        rejectReasonId,
        remoteId,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        /**
         * If provided, will only return applications for this candidate.
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
         * If provided, will only return applications credited to this user.
         */
        creditedToId?: string,
        /**
         * If provided, will only return applications at this interview stage.
         */
        currentStageId?: string,
        /**
         * The pagination cursor value.
         */
        cursor?: string,
        /**
         * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
         */
        expand?: 'candidate' | 'candidate,credited_to' | 'candidate,credited_to,current_stage' | 'candidate,credited_to,current_stage,reject_reason' | 'candidate,credited_to,reject_reason' | 'candidate,current_stage' | 'candidate,current_stage,reject_reason' | 'candidate,job' | 'candidate,job,credited_to' | 'candidate,job,credited_to,current_stage' | 'candidate,job,credited_to,current_stage,reject_reason' | 'candidate,job,credited_to,reject_reason' | 'candidate,job,current_stage' | 'candidate,job,current_stage,reject_reason' | 'candidate,job,reject_reason' | 'candidate,reject_reason' | 'credited_to' | 'credited_to,current_stage' | 'credited_to,current_stage,reject_reason' | 'credited_to,reject_reason' | 'current_stage' | 'current_stage,reject_reason' | 'job' | 'job,credited_to' | 'job,credited_to,current_stage' | 'job,credited_to,current_stage,reject_reason' | 'job,credited_to,reject_reason' | 'job,current_stage' | 'job,current_stage,reject_reason' | 'job,reject_reason' | 'reject_reason',
        /**
         * Whether to include data that was deleted in the third-party service.
         */
        includeDeletedData?: boolean,
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
        /**
         * If provided, will only return applications for this job.
         */
        jobId?: string,
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
         * If provided, will only return applications with this reject reason.
         */
        rejectReasonId?: string,
        /**
         * The API provider's ID for the given object.
         */
        remoteId?: string | null,
    }): CancelablePromise<PaginatedApplicationList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/applications',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'candidate_id': candidateId,
                'created_after': createdAfter,
                'created_before': createdBefore,
                'credited_to_id': creditedToId,
                'current_stage_id': currentStageId,
                'cursor': cursor,
                'expand': expand,
                'include_deleted_data': includeDeletedData,
                'include_remote_data': includeRemoteData,
                'job_id': jobId,
                'modified_after': modifiedAfter,
                'modified_before': modifiedBefore,
                'page_size': pageSize,
                'reject_reason_id': rejectReasonId,
                'remote_id': remoteId,
            },
        });
    }

    /**
     * Creates an `Application` object with the given values.
     * @returns ApplicationResponse
     * @throws ApiError
     */
    public applicationsCreate({
        xAccountToken,
        requestBody,
        isDebugMode,
        runAsync,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        requestBody: ApplicationEndpointRequest,
        /**
         * Whether to include debug fields (such as log file links) in the response.
         */
        isDebugMode?: boolean,
        /**
         * Whether or not third-party updates should be run asynchronously.
         */
        runAsync?: boolean,
    }): CancelablePromise<ApplicationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/applications',
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
     * Returns an `Application` object with the given `id`.
     * @returns Application
     * @throws ApiError
     */
    public applicationsRetrieve({
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
        expand?: 'candidate' | 'candidate,credited_to' | 'candidate,credited_to,current_stage' | 'candidate,credited_to,current_stage,reject_reason' | 'candidate,credited_to,reject_reason' | 'candidate,current_stage' | 'candidate,current_stage,reject_reason' | 'candidate,job' | 'candidate,job,credited_to' | 'candidate,job,credited_to,current_stage' | 'candidate,job,credited_to,current_stage,reject_reason' | 'candidate,job,credited_to,reject_reason' | 'candidate,job,current_stage' | 'candidate,job,current_stage,reject_reason' | 'candidate,job,reject_reason' | 'candidate,reject_reason' | 'credited_to' | 'credited_to,current_stage' | 'credited_to,current_stage,reject_reason' | 'credited_to,reject_reason' | 'current_stage' | 'current_stage,reject_reason' | 'job' | 'job,credited_to' | 'job,credited_to,current_stage' | 'job,credited_to,current_stage,reject_reason' | 'job,credited_to,reject_reason' | 'job,current_stage' | 'job,current_stage,reject_reason' | 'job,reject_reason' | 'reject_reason',
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
    }): CancelablePromise<Application> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/applications/{id}',
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
     * Returns metadata for `Application` POSTs.
     * @returns MetaResponse
     * @throws ApiError
     */
    public applicationsMetaPostRetrieve({
        xAccountToken,
        applicationRemoteTemplateId,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        /**
         * The template ID associated with the nested application in the request.
         */
        applicationRemoteTemplateId?: string,
    }): CancelablePromise<MetaResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/applications/meta/post',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'application_remote_template_id': applicationRemoteTemplateId,
            },
        });
    }

}
