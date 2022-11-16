/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * # The RejectReason Object
 * ### Description
 * The `RejectReason` object is used to represent a reason for rejecting an application.
 * ### Usage Example
 * Fetch from the `LIST RejectReasons` endpoint and filter by `ID` to show all reasons.
 */
export type RejectReason = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    /**
     * The rejection reason’s name.
     */
    name?: string | null;
};

