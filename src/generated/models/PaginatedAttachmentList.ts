/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';

export type PaginatedAttachmentList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<Attachment>;
};

