/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndUserDetailsRequest } from '../models/EndUserDetailsRequest';
import type { LinkToken } from '../models/LinkToken';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LinkTokenService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Creates a link token to be used when linking a new end user.
     * @returns LinkToken
     * @throws ApiError
     */
    public linkTokenCreate({
        requestBody,
    }: {
        requestBody: EndUserDetailsRequest,
    }): CancelablePromise<LinkToken> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/link-token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
