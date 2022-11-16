/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EEOC } from './EEOC';

export type PaginatedEEOCList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<EEOC>;
};

