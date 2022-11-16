/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ValidationProblemSource } from './ValidationProblemSource';

export type ErrorValidationProblem = {
    source?: ValidationProblemSource;
    title: string;
    detail: string;
    problem_type: string;
};

