/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncStatus } from './SyncStatus';

export type PaginatedSyncStatusList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<SyncStatus>;
};

