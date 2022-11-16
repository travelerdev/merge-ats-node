/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenerateRemoteKeyRequest } from '../models/GenerateRemoteKeyRequest';
import type { RemoteKey } from '../models/RemoteKey';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GenerateKeyService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a remote key.
     * @returns RemoteKey
     * @throws ApiError
     */
    public generateKeyCreate({
        requestBody,
    }: {
        requestBody: GenerateRemoteKeyRequest,
    }): CancelablePromise<RemoteKey> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/generate-key',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
