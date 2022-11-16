/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncStatusStatusEnum } from './SyncStatusStatusEnum';

/**
 * # The SyncStatus Object
 * ### Description
 * The `SyncStatus` object is used to represent the syncing state of an account
 *
 * ### Usage Example
 * View the `SyncStatus` for an account to see how recently its models were synced.
 */
export type SyncStatus = {
    model_name: string;
    model_id: string;
    last_sync_start: string;
    next_sync_start: string;
    status: SyncStatusStatusEnum;
    is_initial_sync: boolean;
};

