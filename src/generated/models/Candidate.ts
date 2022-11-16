/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailAddress } from './EmailAddress';
import type { PhoneNumber } from './PhoneNumber';
import type { Url } from './Url';

/**
 * # The Candidate Object
 * ### Description
 * The `Candidate` object is used to represent a Candidate for various positions.
 * ### Usage Example
 * Fetch from the `LIST Candidates` endpoint and filter by `ID` to show all candidates.
 */
export type Candidate = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    /**
     * The candidate's first name.
     */
    first_name?: string | null;
    /**
     * The candidate's last name.
     */
    last_name?: string | null;
    /**
     * The candidate's current company.
     */
    company?: string | null;
    /**
     * The candidate's current title.
     */
    title?: string | null;
    /**
     * When the third party's candidate was created.
     */
    remote_created_at?: string | null;
    /**
     * When the third party's candidate was updated.
     */
    remote_updated_at?: string | null;
    /**
     * When the most recent candidate interaction occurred.
     */
    last_interaction_at?: string | null;
    /**
     * Whether or not the candidate is private.
     */
    is_private?: boolean | null;
    /**
     * Whether or not the candidate can be emailed.
     */
    can_email?: boolean | null;
    /**
     * The candidate's locations.
     */
    locations?: Array<string | null> | null;
    readonly phone_numbers?: Array<PhoneNumber>;
    readonly email_addresses?: Array<EmailAddress>;
    readonly urls?: Array<Url>;
    /**
     * Array of `Tag` names as strings.
     */
    tags?: Array<string>;
    /**
     * Array of `Application` object IDs.
     */
    applications?: Array<string | null>;
    /**
     * Array of `Attachment` object IDs.
     */
    attachments?: Array<string | null>;
    /**
     * Custom fields configured for a given model.
     */
    custom_fields?: Record<string, any> | null;
};

