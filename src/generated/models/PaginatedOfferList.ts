/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Offer } from './Offer';

export type PaginatedOfferList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<Offer>;
};

