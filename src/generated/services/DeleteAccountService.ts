/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DeleteAccountService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete a linked account.
     * @returns any No response body
     * @throws ApiError
     */
    public deleteAccountCreate({
        xAccountToken,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/delete-account',
            headers: {
                'X-Account-Token': xAccountToken,
            },
        });
    }

}
