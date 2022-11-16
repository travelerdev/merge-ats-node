/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Issue } from './Issue';

export type PaginatedIssueList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<Issue>;
};

