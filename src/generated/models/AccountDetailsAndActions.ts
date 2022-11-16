/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountDetailsAndActionsIntegration } from './AccountDetailsAndActionsIntegration';
import type { AccountDetailsAndActionsStatusEnum } from './AccountDetailsAndActionsStatusEnum';
import type { CategoryEnum } from './CategoryEnum';

/**
 * # The LinkedAccount Object
 * ### Description
 * The `LinkedAccount` object is used to represent an end user's link with a specific integration.
 *
 * ### Usage Example
 * View a list of your organization's `LinkedAccount` objects.
 */
export type AccountDetailsAndActions = {
    id: string;
    category?: CategoryEnum;
    status: AccountDetailsAndActionsStatusEnum;
    status_detail?: string;
    end_user_origin_id?: string;
    end_user_organization_name: string;
    end_user_email_address: string;
    integration?: AccountDetailsAndActionsIntegration;
};

