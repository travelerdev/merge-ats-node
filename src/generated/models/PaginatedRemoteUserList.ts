/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RemoteUser } from './RemoteUser';

export type PaginatedRemoteUserList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<RemoteUser>;
};

