/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Application } from './Application';
import type { DebugModeLog } from './DebugModeLog';
import type { ErrorValidationProblem } from './ErrorValidationProblem';
import type { WarningValidationProblem } from './WarningValidationProblem';

export type ApplicationResponse = {
    model: Application;
    warnings: Array<WarningValidationProblem>;
    errors: Array<ErrorValidationProblem>;
    logs?: Array<DebugModeLog>;
};

