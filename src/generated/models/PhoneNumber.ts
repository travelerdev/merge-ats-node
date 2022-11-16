/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PhoneNumberTypeEnum } from './PhoneNumberTypeEnum';

/**
 * # The PhoneNumber Object
 * ### Description
 * The `PhoneNumber` object is used to represent a candidate's phone number.
 * ### Usage Example
 * Fetch from the `GET Candidate` endpoint and view their phone numbers.
 */
export type PhoneNumber = {
    /**
     * The phone number.
     */
    value?: string | null;
    /**
     * The type of phone number.
     */
    phone_number_type?: PhoneNumberTypeEnum | null;
};

