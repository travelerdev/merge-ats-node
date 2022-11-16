/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Activity } from './Activity';

export type PaginatedActivityList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<Activity>;
};

