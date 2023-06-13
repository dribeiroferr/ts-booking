import { ErrorBase } from "../../../utils/errors/errors";

type ErrorName = 
    | 'GET_PROJECT_ERROR'
    | 'CREATE_PROJECT_ERROR'
    | 'PROJECT_LIMIT_REACHED';

export class TeamError extends ErrorBase<ErrorName> {}