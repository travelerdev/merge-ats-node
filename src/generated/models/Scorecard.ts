/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OverallRecommendationEnum } from './OverallRecommendationEnum';

/**
 * # The Scorecard Object
 * ### Description
 * The `Scorecard` object is used to represent a Scorecard for an interview
 * ### Usage Example
 * Fetch from the `LIST Scorecards` endpoint and filter by `application` to show all scorecard for an applicant.
 */
export type Scorecard = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    application?: string | null;
    interview?: string | null;
    interviewer?: string | null;
    /**
     * When the third party's scorecard was created.
     */
    remote_created_at?: string | null;
    /**
     * When the scorecard was submitted.
     */
    submitted_at?: string | null;
    /**
     * The inteviewer's recommendation.
     */
    overall_recommendation?: OverallRecommendationEnum | null;
};

