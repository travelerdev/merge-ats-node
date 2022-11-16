/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoriesEnum } from './CategoriesEnum';

export type AccountIntegration = {
    /**
     * Company name.
     */
    name: string;
    /**
     * Category or categories this integration belongs to. Multiple categories should be comma separated.<br/><br>Example: For [ats, hris], enter <i>ats,hris</i>
     */
    categories?: Array<CategoriesEnum>;
    /**
     * Company logo in rectangular shape. <b>Upload an image with a clear background.</b>
     */
    image?: string | null;
    /**
     * Company logo in square shape. <b>Upload an image with a white background.</b>
     */
    square_image?: string | null;
    /**
     * The color of this integration used for buttons and text throughout the app and landing pages. <b>Choose a darker, saturated color.</b>
     */
    color?: string;
    readonly slug?: string;
};

