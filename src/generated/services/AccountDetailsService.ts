/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountDetails } from '../models/AccountDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountDetailsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get details for a linked account.
     * @returns AccountDetails
     * @throws ApiError
     */
    public accountDetailsRetrieve({
        xAccountToken,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
    }): CancelablePromise<AccountDetails> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/account-details',
            headers: {
                'X-Account-Token': xAccountToken,
            },
        });
    }

}
