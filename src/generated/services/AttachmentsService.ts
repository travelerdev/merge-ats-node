/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from '../models/Attachment';
import type { AttachmentEndpointRequest } from '../models/AttachmentEndpointRequest';
import type { AttachmentResponse } from '../models/AttachmentResponse';
import type { MetaResponse } from '../models/MetaResponse';
import type { PaginatedAttachmentList } from '../models/PaginatedAttachmentList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AttachmentsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of `Attachment` objects.
     * @returns PaginatedAttachmentList
     * @throws ApiError
     */
    public attachmentsList({
        xAccountToken,
        candidateId,
        createdAfter,
        createdBefore,
        cursor,
        expand,
        includeDeletedData,
        includeRemoteData,
        modifiedAfter,
        modifiedBefore,
        pageSize,
        remoteId,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        /**
         * If provided, will only return attachments for this candidate.
         */
        candidateId?: string,
        /**
         * If provided, will only return objects created after this datetime.
         */
        createdAfter?: string,
        /**
         * If provided, will only return objects created before this datetime.
         */
        createdBefore?: string,
        /**
         * The pagination cursor value.
         */
        cursor?: string,
        /**
         * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
         */
        expand?: 'candidate',
        /**
         * Whether to include data that was deleted in the third-party service.
         */
        includeDeletedData?: boolean,
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
        /**
         * If provided, will only return objects modified after this datetime.
         */
        modifiedAfter?: string,
        /**
         * If provided, will only return objects modified before this datetime.
         */
        modifiedBefore?: string,
        /**
         * Number of results to return per page.
         */
        pageSize?: number,
        /**
         * The API provider's ID for the given object.
         */
        remoteId?: string | null,
    }): CancelablePromise<PaginatedAttachmentList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/attachments',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'candidate_id': candidateId,
                'created_after': createdAfter,
                'created_before': createdBefore,
                'cursor': cursor,
                'expand': expand,
                'include_deleted_data': includeDeletedData,
                'include_remote_data': includeRemoteData,
                'modified_after': modifiedAfter,
                'modified_before': modifiedBefore,
                'page_size': pageSize,
                'remote_id': remoteId,
            },
        });
    }

    /**
     * Creates an `Attachment` object with the given values.
     * @returns AttachmentResponse
     * @throws ApiError
     */
    public attachmentsCreate({
        xAccountToken,
        requestBody,
        isDebugMode,
        runAsync,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        requestBody: AttachmentEndpointRequest,
        /**
         * Whether to include debug fields (such as log file links) in the response.
         */
        isDebugMode?: boolean,
        /**
         * Whether or not third-party updates should be run asynchronously.
         */
        runAsync?: boolean,
    }): CancelablePromise<AttachmentResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/attachments',
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'is_debug_mode': isDebugMode,
                'run_async': runAsync,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Returns an `Attachment` object with the given `id`.
     * @returns Attachment
     * @throws ApiError
     */
    public attachmentsRetrieve({
        xAccountToken,
        id,
        expand,
        includeRemoteData,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
        id: string,
        /**
         * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
         */
        expand?: 'candidate',
        /**
         * Whether to include the original data Merge fetched from the third-party to produce these models.
         */
        includeRemoteData?: boolean,
    }): CancelablePromise<Attachment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/attachments/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Account-Token': xAccountToken,
            },
            query: {
                'expand': expand,
                'include_remote_data': includeRemoteData,
            },
        });
    }

    /**
     * Returns metadata for `Attachment` POSTs.
     * @returns MetaResponse
     * @throws ApiError
     */
    public attachmentsMetaPostRetrieve({
        xAccountToken,
    }: {
        /**
         * Token identifying the end user.
         */
        xAccountToken: string,
    }): CancelablePromise<MetaResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/attachments/meta/post',
            headers: {
                'X-Account-Token': xAccountToken,
            },
        });
    }

}
