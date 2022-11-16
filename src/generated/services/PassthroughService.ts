/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataPassthroughRequest } from '../models/DataPassthroughRequest';
import type { RemoteResponse } from '../models/RemoteResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PassthroughService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Pull data from an endpoint not currently supported by Merge.
     * @returns RemoteResponse
     * @throws ApiError
     */
    public passthroughCreate({
        xAccountToken,
        requestBody,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        requestBody: DataPassthroughRequest,
    }): CancelablePromise<RemoteResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/passthrough',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
