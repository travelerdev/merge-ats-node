/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RejectReason } from './RejectReason';

export type PaginatedRejectReasonList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<RejectReason>;
};

