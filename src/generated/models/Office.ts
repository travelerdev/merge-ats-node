/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * # The Office Object
 * ### Description
 * The `Office` object is used to represent an office within a company.
 * ### Usage Example
 * Fetch from the `LIST Offices` endpoint and view the offices within a company.
 */
export type Office = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    /**
     * The office's name.
     */
    name?: string | null;
    /**
     * The office's location.
     */
    location?: string | null;
};

