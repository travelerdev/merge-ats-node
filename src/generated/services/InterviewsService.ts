/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedScheduledInterviewList } from '../models/PaginatedScheduledInterviewList';
import type { ScheduledInterview } from '../models/ScheduledInterview';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InterviewsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of `ScheduledInterview` objects.
     * @returns PaginatedScheduledInterviewList
     * @throws ApiError
     */
    public interviewsList({
        xAccountToken,
        applicationId,
        createdAfter,
        createdBefore,
        cursor,
        expand,
        includeDeletedData,
        includeRemoteData,
        jobInterviewStageId,
        modifiedAfter,
        modifiedBefore,
        organizerId,
        pageSize,
        remoteId,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        /**
         * If provided, will only return interviews for this application.
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
         * The pagination cursor value.
         */
        cursor?: string,
        /**
         * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
         */
        expand?: 'application' | 'application,job_interview_stage' | 'interviewers' | 'interviewers,application' | 'interviewers,application,job_interview_stage' | 'interviewers,job_interview_stage' | 'interviewers,organizer' | 'interviewers,organizer,application' | 'interviewers,organizer,application,job_interview_stage' | 'interviewers,organizer,job_interview_stage' | 'job_interview_stage' | 'organizer' | 'organizer,application' | 'organizer,application,job_interview_stage' | 'organizer,job_interview_stage',
        /**
         * Whether to include data that was deleted in the third-party service.
         */
        includeDeletedData?: boolean,
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
        /**
         * If provided, will only return interviews at this stage.
         */
        jobInterviewStageId?: string,
        /**
         * If provided, will only return objects modified after this datetime.
         */
        modifiedAfter?: string,
        /**
         * If provided, will only return objects modified before this datetime.
         */
        modifiedBefore?: string,
        /**
         * If provided, will only return interviews organized by this user.
         */
        organizerId?: string,
        /**
         * Number of results to return per page.
         */
        pageSize?: number,
        /**
         * The API provider's ID for the given object.
         */
        remoteId?: string | null,
    }): CancelablePromise<PaginatedScheduledInterviewList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/interviews',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'application_id': applicationId,
                'created_after': createdAfter,
                'created_before': createdBefore,
                'cursor': cursor,
                'expand': expand,
                'include_deleted_data': includeDeletedData,
                'include_remote_data': includeRemoteData,
                'job_interview_stage_id': jobInterviewStageId,
                'modified_after': modifiedAfter,
                'modified_before': modifiedBefore,
                'organizer_id': organizerId,
                'page_size': pageSize,
                'remote_id': remoteId,
            },
        });
    }

    /**
     * Returns a `ScheduledInterview` object with the given `id`.
     * @returns ScheduledInterview
     * @throws ApiError
     */
    public interviewsRetrieve({
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
        expand?: 'application' | 'application,job_interview_stage' | 'interviewers' | 'interviewers,application' | 'interviewers,application,job_interview_stage' | 'interviewers,job_interview_stage' | 'interviewers,organizer' | 'interviewers,organizer,application' | 'interviewers,organizer,application,job_interview_stage' | 'interviewers,organizer,job_interview_stage' | 'job_interview_stage' | 'organizer' | 'organizer,application' | 'organizer,application,job_interview_stage' | 'organizer,job_interview_stage',
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
    }): CancelablePromise<ScheduledInterview> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/interviews/{id}',
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
