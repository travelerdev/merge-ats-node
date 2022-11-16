/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { DebugModeLog } from './DebugModeLog';
import type { ErrorValidationProblem } from './ErrorValidationProblem';
import type { WarningValidationProblem } from './WarningValidationProblem';

export type AttachmentResponse = {
    model: Attachment;
    warnings: Array<WarningValidationProblem>;
    errors: Array<ErrorValidationProblem>;
    logs?: Array<DebugModeLog>;
};

