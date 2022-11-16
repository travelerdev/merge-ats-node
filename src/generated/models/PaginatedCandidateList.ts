/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Candidate } from './Candidate';

export type PaginatedCandidateList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<Candidate>;
};

