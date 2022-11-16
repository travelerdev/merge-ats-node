/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountToken } from '../models/AccountToken';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountTokenService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns the account token for the end user with the provided public token.
     * @returns AccountToken
     * @throws ApiError
     */
    public accountTokenRetrieve({
        publicToken,
    }: {
        publicToken: string,
    }): CancelablePromise<AccountToken> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/account-token/{public_token}',
            path: {
                'public_token': publicToken,
            },
        });
    }

}
