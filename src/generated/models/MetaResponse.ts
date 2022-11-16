/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkedAccountStatus } from './LinkedAccountStatus';

export type MetaResponse = {
    request_schema: Record<string, any>;
    status?: LinkedAccountStatus;
    has_conditional_params: boolean;
    has_required_linked_account_params: boolean;
};

