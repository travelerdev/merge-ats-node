/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Candidate } from './Candidate';
import type { DebugModeLog } from './DebugModeLog';
import type { ErrorValidationProblem } from './ErrorValidationProblem';
import type { WarningValidationProblem } from './WarningValidationProblem';

export type CandidateResponse = {
    model: Candidate;
    warnings: Array<WarningValidationProblem>;
    errors: Array<ErrorValidationProblem>;
    logs?: Array<DebugModeLog>;
};

