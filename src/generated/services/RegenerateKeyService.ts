/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RemoteKey } from '../models/RemoteKey';
import type { RemoteKeyForRegenerationRequest } from '../models/RemoteKeyForRegenerationRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RegenerateKeyService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Exchange remote keys.
     * @returns RemoteKey
     * @throws ApiError
     */
    public regenerateKeyCreate({
        requestBody,
    }: {
        requestBody: RemoteKeyForRegenerationRequest,
    }): CancelablePromise<RemoteKey> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/regenerate-key',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
