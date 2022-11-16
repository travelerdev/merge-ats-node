/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Office } from './Office';

export type PaginatedOfficeList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<Office>;
};

