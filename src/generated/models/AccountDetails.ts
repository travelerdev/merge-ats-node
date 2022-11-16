/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryEnum } from './CategoryEnum';

export type AccountDetails = {
    readonly id?: string;
    readonly integration?: string;
    readonly integration_slug?: string;
    category?: CategoryEnum | null;
    readonly end_user_origin_id?: string;
    readonly end_user_organization_name?: string;
    readonly end_user_email_address?: string;
    readonly status?: string;
};

