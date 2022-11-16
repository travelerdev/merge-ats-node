/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoriesEnum } from './CategoriesEnum';
import type { ModelOperation } from './ModelOperation';

export type AccountDetailsAndActionsIntegration = {
    name: string;
    categories: Array<CategoriesEnum>;
    image?: string;
    square_image?: string;
    color: string;
    slug: string;
    passthrough_available: boolean;
    available_model_operations?: Array<ModelOperation>;
};

