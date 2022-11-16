/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * # The ModelOperation Object
 * ### Description
 * The `ModelOperation` object is used to represent the operations that are currently supported for a given model.
 *
 * ### Usage Example
 * View what operations are supported for the `Candidate` endpoint.
 */
export type ModelOperation = {
    model_name: string;
    available_operations: Array<string>;
    required_post_parameters: Array<string>;
    supported_fields: Array<string>;
};

