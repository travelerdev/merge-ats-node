/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * # The RemoteResponse Object
 * ### Description
 * The `RemoteResponse` object is used to represent information returned from a third-party endpoint.
 *
 * ### Usage Example
 * View the `RemoteResponse` returned from your `DataPassthrough`.
 */
export type RemoteResponse = {
    method: string;
    path: string;
    status: number;
    response: Record<string, any>;
    headers?: Record<string, any>;
};

