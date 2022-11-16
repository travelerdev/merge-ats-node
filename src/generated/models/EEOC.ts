/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DisabilityStatusEnum } from './DisabilityStatusEnum';
import type { GenderEnum } from './GenderEnum';
import type { RaceEnum } from './RaceEnum';
import type { VeteranStatusEnum } from './VeteranStatusEnum';

/**
 * # The EEOC Object
 * ### Description
 * The `EEOC` object is used to represent the Equal Employment Opportunity Commission information for a candidate.
 * ### Usage Example
 * Fetch from the `LIST EEOCs` endpoint and filter by `candidate` to show all EEOC information for a candidate.
 */
export type EEOC = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    candidate?: string | null;
    /**
     * When the information was submitted.
     */
    submitted_at?: string | null;
    /**
     * The candidate's race.
     */
    race?: RaceEnum | null;
    /**
     * The candidate's gender.
     */
    gender?: GenderEnum | null;
    /**
     * The candidate's veteran status.
     */
    veteran_status?: VeteranStatusEnum | null;
    /**
     * The candidate's disability status.
     */
    disability_status?: DisabilityStatusEnum | null;
};

