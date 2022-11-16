/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Application } from './Application';

export type PaginatedApplicationList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<Application>;
};

