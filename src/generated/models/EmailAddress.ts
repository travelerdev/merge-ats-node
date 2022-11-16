/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailAddressTypeEnum } from './EmailAddressTypeEnum';

/**
 * # The EmailAddress Object
 * ### Description
 * The `EmailAddress` object is used to represent a candidate's email address.
 * ### Usage Example
 * Fetch from the `GET Candidate` endpoint and view their email addresses.
 */
export type EmailAddress = {
    /**
     * The email address.
     */
    value?: string | null;
    /**
     * The type of email address.
     */
    email_address_type?: EmailAddressTypeEnum | null;
};

