/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * # The RemoteKey Object
 * ### Description
 * The `RemoteKey` object is used to represent a request for a new remote key.
 *
 * ### Usage Example
 * Post a `GenerateRemoteKey` to receive a new `RemoteKey`.
 */
export type RemoteKey = {
    name: string;
    key: string;
};

