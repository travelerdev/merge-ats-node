/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobInterviewStage } from './JobInterviewStage';

export type PaginatedJobInterviewStageList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<JobInterviewStage>;
};

