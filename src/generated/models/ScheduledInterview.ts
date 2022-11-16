/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScheduledInterviewStatusEnum } from './ScheduledInterviewStatusEnum';

/**
 * # The ScheduledInterview Object
 * ### Description
 * The `ScheduledInterview` object is used to represent an interview
 * ### Usage Example
 * Fetch from the `LIST ScheduledInterviews` endpoint and filter by `interviewers` to show all office locations.
 */
export type ScheduledInterview = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    application?: string | null;
    job_interview_stage?: string | null;
    organizer?: string | null;
    /**
     * Array of `RemoteUser` IDs.
     */
    interviewers?: Array<string | null>;
    /**
     * The interview's location.
     */
    location?: string | null;
    /**
     * When the interview was started.
     */
    start_at?: string | null;
    /**
     * When the interview was ended.
     */
    end_at?: string | null;
    /**
     * When the third party's interview was created.
     */
    remote_created_at?: string | null;
    /**
     * When the third party's interview was updated.
     */
    remote_updated_at?: string | null;
    /**
     * The interview's status.
     */
    status?: ScheduledInterviewStatusEnum | null;
};

