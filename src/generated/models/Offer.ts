/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OfferStatusEnum } from './OfferStatusEnum';

/**
 * # The Offer Object
 * ### Description
 * The `Offer` object is used to represent an offer for an application.
 * ### Usage Example
 * Fetch from the `LIST Offers` endpoint and filter by `ID` to show all offers.
 */
export type Offer = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    application?: string | null;
    creator?: string | null;
    /**
     * When the third party's offer was created.
     */
    remote_created_at?: string | null;
    /**
     * When the offer was closed.
     */
    closed_at?: string | null;
    /**
     * When the offer was sent.
     */
    sent_at?: string | null;
    /**
     * The employment start date on the offer.
     */
    start_date?: string | null;
    /**
     * The offer's status.
     */
    status?: OfferStatusEnum | null;
};

