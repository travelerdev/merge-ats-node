/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Department } from './Department';

export type PaginatedDepartmentList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<Department>;
};

