/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MethodEnum } from './MethodEnum';
import type { MultipartFormFieldRequest } from './MultipartFormFieldRequest';
import type { RequestFormatEnum } from './RequestFormatEnum';

/**
 * # The DataPassthrough Object
 * ### Description
 * The `DataPassthrough` object is used to send information to an otherwise-unsupported third-party endpoint.
 *
 * ### Usage Example
 * Create a `DataPassthrough` to get team hierarchies from your Rippling integration.
 */
export type DataPassthroughRequest = {
    method: MethodEnum;
    path: string;
    base_url_override?: string | null;
    data?: string | null;
    /**
     * Pass an array of `MultipartFormField` objects in here instead of using the `data` param if `request_format` is set to `MULTIPART`.
     */
    multipart_form_data?: Array<MultipartFormFieldRequest> | null;
    /**
     * The headers to use for the request (Merge will handle the account's authorization headers). `Content-Type` header is required for passthrough. Choose content type corresponding to expected format of receiving server.
     */
    headers?: Record<string, any> | null;
    request_format?: RequestFormatEnum | null;
};

