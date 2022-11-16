/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Tag } from './Tag';

export type PaginatedTagList = {
    next?: string | null;
    previous?: string | null;
    results?: Array<Tag>;
};

