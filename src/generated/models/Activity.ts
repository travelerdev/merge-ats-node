/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivityTypeEnum } from './ActivityTypeEnum';
import type { VisibilityEnum } from './VisibilityEnum';

/**
 * # The Activity Object
 * ### Description
 * The `Activity` object is used to represent an activity performed by a user.
 * ### Usage Example
 * Fetch from the `LIST Activities` endpoint and filter by `ID` to show all activities.
 */
export type Activity = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    user?: string | null;
    /**
     * When the third party's activity was created.
     */
    remote_created_at?: string | null;
    /**
     * The activity's type.
     */
    activity_type?: ActivityTypeEnum | null;
    /**
     * The activity's subject.
     */
    subject?: string | null;
    /**
     * The activity's body.
     */
    body?: string | null;
    /**
     * The activity's visibility.
     */
    visibility?: VisibilityEnum | null;
};

