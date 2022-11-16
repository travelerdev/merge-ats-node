/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachmentTypeEnum } from './AttachmentTypeEnum';

/**
 * # The Attachment Object
 * ### Description
 * The `Attachment` object is used to represent a attachment for a candidate.
 * ### Usage Example
 * Fetch from the `LIST Attachments` endpoint and view attachments accessible by a company.
 */
export type Attachment = {
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    /**
     * The attachment's name.
     */
    file_name?: string | null;
    /**
     * The attachment's url.
     */
    file_url?: string | null;
    candidate?: string | null;
    /**
     * The attachment's type.
     */
    attachment_type?: AttachmentTypeEnum | null;
};

