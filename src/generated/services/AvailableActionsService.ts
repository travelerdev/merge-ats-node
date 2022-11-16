/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailableActions } from '../models/AvailableActions';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AvailableActionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of models and actions available for an account.
     * @returns AvailableActions
     * @throws ApiError
     */
    public availableActionsRetrieve({
        xAccountToken,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
    }): CancelablePromise<AvailableActions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/available-actions',
            headers: {
                'X-Account-Token': xAccountToken,
            },
        });
    }

}
