/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedAccountDetailsAndActionsList } from '../models/PaginatedAccountDetailsAndActionsList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LinkedAccountsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List linked accounts for your organization.
     * @returns PaginatedAccountDetailsAndActionsList
     * @throws ApiError
     */
    public linkedAccountsList({
        category,
        cursor,
        endUserEmailAddress,
        endUserOrganizationName,
        endUserOriginId,
        endUserOriginIds,
        id,
        ids,
        integrationName,
        isTestAccount,
        pageSize,
        status,
    }: {
        category?: 'accounting' | 'ats' | 'hris' | 'ticketing' | null,
        /**
         * The pagination cursor value.
         */
        cursor?: string,
        endUserEmailAddress?: string,
        endUserOrganizationName?: string,
        endUserOriginId?: string,
        /**
         * Comma-separated list of EndUser origin IDs, making it possible to specify multiple EndUsers at once
         */
        endUserOriginIds?: string,
        id?: string,
        /**
         * Comma-separated list of LinkedAccount IDs, making it possible to specify multiple LinkedAccounts at once
         */
        ids?: string,
        integrationName?: string,
        /**
         * If included, will only include test linked accounts. If not included, will only include non-test linked accounts
         */
        isTestAccount?: string,
        /**
         * Number of results to return per page.
         */
        pageSize?: number,
        /**
         * Filter by status. Options: `COMPLETE`, `INCOMPLETE`, `RELINK_NEEDED`
         */
        status?: string,
    }): CancelablePromise<PaginatedAccountDetailsAndActionsList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/linked-accounts',
            query: {
                'category': category,
                'cursor': cursor,
                'end_user_email_address': endUserEmailAddress,
                'end_user_organization_name': endUserOrganizationName,
                'end_user_origin_id': endUserOriginId,
                'end_user_origin_ids': endUserOriginIds,
                'id': id,
                'ids': ids,
                'integration_name': integrationName,
                'is_test_account': isTestAccount,
                'page_size': pageSize,
                'status': status,
            },
        });
    }

}
