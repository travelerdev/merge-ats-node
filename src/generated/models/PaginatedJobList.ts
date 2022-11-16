/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Job } from './Job';

export type PaginatedJobList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<Job>;
};

