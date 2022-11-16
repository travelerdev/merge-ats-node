/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountDetailsAndActions } from './AccountDetailsAndActions';

export type PaginatedAccountDetailsAndActionsList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<AccountDetailsAndActions>;
};

