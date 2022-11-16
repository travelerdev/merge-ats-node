/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodingEnum } from './EncodingEnum';

/**
 * # The MultipartFormField Object
 * ### Description
 * The `MultipartFormField` object is used to represent fields in an HTTP request using `multipart/form-data`.
 *
 * ### Usage Example
 * Create a `MultipartFormField` to define a multipart form entry.
 */
export type MultipartFormFieldRequest = {
    /**
     * The name of the form field
     */
    name: string;
    /**
     * The data for the form field.
     */
    data: string;
    /**
     * The encoding of the value of `data`. Defaults to `RAW` if not defined.
     */
    encoding?: EncodingEnum | null;
    /**
     * The file name of the form field, if the field is for a file.
     */
    file_name?: string | null;
    /**
     * The MIME type of the file, if the field is for a file.
     */
    content_type?: string | null;
};

