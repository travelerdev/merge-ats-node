/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessRoleEnum } from './AccessRoleEnum';

/**
 * # The RemoteUser Object
 * ### Description
 * The `RemoteUser` object is used to represent a third party user.
 * ### Usage Example
 * Fetch from the `LIST RemoteUsers` endpoint to show all users for a third party.
 */
export type RemoteUser = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    /**
     * The user's first name.
     */
    first_name?: string | null;
    /**
     * The user's last name.
     */
    last_name?: string | null;
    /**
     * The user's email.
     */
    email?: string | null;
    /**
     * Whether the user's account had been disabled.
     */
    disabled?: boolean | null;
    /**
     * When the third party's user was created.
     */
    remote_created_at?: string | null;
    /**
     * The user's role.
     */
    access_role?: AccessRoleEnum | null;
};

