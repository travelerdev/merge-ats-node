/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobStatusEnum } from './JobStatusEnum';

/**
 * # The Job Object
 * ### Description
 * The `Job` object is used to represent a Job offering at a company.
 * ### Usage Example
 * Fetch from the `LIST Jobs` endpoint to show all job postings.
 */
export type Job = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    /**
     * The job's name.
     */
    name?: string | null;
    /**
     * The job's description.
     */
    description?: string | null;
    /**
     * The job's code. Typically an additional identifier used to reference the particular job that is displayed on the ATS.
     */
    code?: string | null;
    /**
     * The job's status.
     */
    status?: JobStatusEnum | null;
    /**
     * When the third party's job was created.
     */
    remote_created_at?: string | null;
    /**
     * When the third party's job was updated.
     */
    remote_updated_at?: string | null;
    /**
     * Whether the job is confidential.
     */
    confidential?: boolean | null;
    /**
     * IDs of `Department` objects for this `Job`.
     */
    departments?: Array<string | null>;
    /**
     * IDs of `Office` objects for this `Job`.
     */
    offices?: Array<string | null>;
    /**
     * IDs of `RemoteUser` objects that serve as hiring managers for this `Job`.
     */
    hiring_managers?: Array<string | null>;
};

