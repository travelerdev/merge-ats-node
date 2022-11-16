/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * # The JobInterviewStage Object
 * ### Description
 * The `JobInterviewStage` object is used to represent the stage of an interview
 * ### Usage Example
 * Fetch from the `LIST JobInterviewStages` endpoint and view the job interview stages used by a company.
 */
export type JobInterviewStage = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    /**
     * The stage's name.
     */
    name?: string | null;
    job?: string | null;
};

