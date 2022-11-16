/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountIntegration } from './AccountIntegration';
import type { ModelOperation } from './ModelOperation';

/**
 * # The AvailableActions Object
 * ### Description
 * The `Activity` object is used to see all available model/operation combinations for an integration.
 *
 * ### Usage Example
 * Fetch all the actions available for the `Zenefits` integration.
 */
export type AvailableActions = {
    integration: AccountIntegration;
    passthrough_available: boolean;
    available_model_operations?: Array<ModelOperation>;
};

