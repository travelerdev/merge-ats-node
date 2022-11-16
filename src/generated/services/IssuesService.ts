/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Issue } from '../models/Issue';
import type { PaginatedIssueList } from '../models/PaginatedIssueList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssuesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets issues.
     * @returns PaginatedIssueList
     * @throws ApiError
     */
    public issuesList({
        accountToken,
        cursor,
        endDate,
        endUserOrganizationName,
        includeMuted,
        integrationName,
        pageSize,
        startDate,
        status,
    }: {
        accountToken?: string,
        /**
         * The pagination cursor value.
         */
        cursor?: string,
        /**
         * If included, will only include issues whose most recent action occurred before this time
         */
        endDate?: string,
        endUserOrganizationName?: string,
        /**
         * If True, will include muted issues
         */
        includeMuted?: string,
        integrationName?: string,
        /**
         * Number of results to return per page.
         */
        pageSize?: number,
        /**
         * If included, will only include issues whose most recent action occurred after this time
         */
        startDate?: string,
        status?: 'ONGOING' | 'RESOLVED',
    }): CancelablePromise<PaginatedIssueList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/issues',
            query: {
                'account_token': accountToken,
                'cursor': cursor,
                'end_date': endDate,
                'end_user_organization_name': endUserOrganizationName,
                'include_muted': includeMuted,
                'integration_name': integrationName,
                'page_size': pageSize,
                'start_date': startDate,
                'status': status,
            },
        });
    }

    /**
     * Get a specific issue.
     * @returns Issue
     * @throws ApiError
     */
    public issuesRetrieve({
        id,
    }: {
        id: string,
    }): CancelablePromise<Issue> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/issues/{id}',
            path: {
                'id': id,
            },
        });
    }

}
