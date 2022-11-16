/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedScorecardList } from '../models/PaginatedScorecardList';
import type { Scorecard } from '../models/Scorecard';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ScorecardsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of `Scorecard` objects.
     * @returns PaginatedScorecardList
     * @throws ApiError
     */
    public scorecardsList({
        xAccountToken,
        applicationId,
        createdAfter,
        createdBefore,
        cursor,
        expand,
        includeDeletedData,
        includeRemoteData,
        interviewId,
        interviewerId,
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
         * If provided, will only return scorecards for this application.
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
        expand?: 'application' | 'application,interview' | 'application,interview,interviewer' | 'application,interviewer' | 'interview' | 'interview,interviewer' | 'interviewer',
        /**
         * Whether to include data that was deleted in the third-party service.
         */
        includeDeletedData?: boolean,
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
        /**
         * If provided, will only return scorecards for this interview.
         */
        interviewId?: string,
        /**
         * If provided, will only return scorecards for this interviewer.
         */
        interviewerId?: string,
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
    }): CancelablePromise<PaginatedScorecardList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/scorecards',
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
                'interview_id': interviewId,
                'interviewer_id': interviewerId,
                'modified_after': modifiedAfter,
                'modified_before': modifiedBefore,
                'page_size': pageSize,
                'remote_id': remoteId,
            },
        });
    }

    /**
     * Returns a `Scorecard` object with the given `id`.
     * @returns Scorecard
     * @throws ApiError
     */
    public scorecardsRetrieve({
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
        expand?: 'application' | 'application,interview' | 'application,interview,interviewer' | 'application,interviewer' | 'interview' | 'interview,interviewer' | 'interviewer',
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
    }): CancelablePromise<Scorecard> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/scorecards/{id}',
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
