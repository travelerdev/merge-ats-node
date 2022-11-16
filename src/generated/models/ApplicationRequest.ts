/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * # The Application Object
 * ### Description
 * The `Application` object is used to represent an Application for a job position.
 * ### Usage Example
 * Fetch from the `LIST Applications` endpoint and filter by `ID` to show all applications.
 */
export type ApplicationRequest = {
    /**
     * The third-party API ID of the matching object.
     */
    remote_id?: string | null;
    candidate?: string | null;
    job?: string | null;
    /**
     * When the application was submitted.
     */
    applied_at?: string | null;
    /**
     * When the application was rejected.
     */
    rejected_at?: string | null;
    /**
     * The application's source.
     */
    source?: string | null;
    credited_to?: string | null;
    current_stage?: string | null;
    reject_reason?: string | null;
    /**
     * Custom fields configured for a given model.
     */
    custom_fields?: Record<string, any> | null;
    remote_template_id?: string | null;
    integration_params?: Record<string, any> | null;
    linked_account_params?: Record<string, any> | null;
};

