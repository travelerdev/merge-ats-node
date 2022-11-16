/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScheduledInterview } from './ScheduledInterview';

export type PaginatedScheduledInterviewList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<ScheduledInterview>;
};

