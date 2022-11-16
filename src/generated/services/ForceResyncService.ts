/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SyncStatus } from '../models/SyncStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ForceResyncService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Force re-sync of all models. This is only available for organizations on Merge's Grow and Expand plans.
     * @returns SyncStatus
     * @throws ApiError
     */
    public syncStatusResyncCreate({
        xAccountToken,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
    }): CancelablePromise<SyncStatus> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sync-status/resync',
            headers: {
                'X-Account-Token': xAccountToken,
            },
        });
    }

}
