/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * # The Department Object
 * ### Description
 * The `Department` object is used to represent a department within a company.
 * ### Usage Example
 * Fetch from the `LIST Departments` endpoint and view the departments within a company.
 */
export type Department = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    /**
     * The department's name.
     */
    name?: string | null;
};

