/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UrlTypeEnum } from './UrlTypeEnum';

/**
 * # The Url Object
 * ### Description
 * The `Url` object is used to represent a candidate's website.
 * ### Usage Example
 * Fetch from the `GET Candidate` endpoint and view their website urls.
 */
export type Url = {
    /**
     * The site's url.
     */
    value?: string | null;
    /**
     * The type of site.
     */
    url_type?: UrlTypeEnum | null;
};

