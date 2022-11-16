/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Scorecard } from './Scorecard';

export type PaginatedScorecardList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<Scorecard>;
};

