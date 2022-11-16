/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssueStatusEnum } from './IssueStatusEnum';

export type Issue = {
    readonly id?: string;
    status?: IssueStatusEnum;
    error_description: string;
    readonly end_user?: Record<string, any>;
    first_incident_time?: string | null;
    last_incident_time?: string | null;
    readonly is_muted?: boolean;
};

