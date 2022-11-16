/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoriesEnum } from './CategoriesEnum';

export type EndUserDetailsRequest = {
    end_user_email_address: string;
    end_user_organization_name: string;
    end_user_origin_id: string;
    categories?: Array<CategoriesEnum>;
    /**
     * The slug of a specific pre-selected integration for this linking flow token, for examples of slugs see https://www.merge.dev/docs/basics/integration-metadata
     */
    integration?: string | null;
    /**
     * An integer number of minutes between [30, 720] for how long this token is valid. Defaults to 30
     */
    link_expiry_mins?: number;
};

