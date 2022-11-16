/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * # The Tag Object
 * ### Description
 * The `Tag` object is used to represent a tag for a candidate.
 * ### Usage Example
 * Fetch from the `LIST Tags` endpoint and view the tags used within a company.
 */
export type Tag = {
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    /**
     * The tag's name.
     */
    name?: string | null;
};

