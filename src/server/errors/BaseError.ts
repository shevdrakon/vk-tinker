import {ErrorNames} from './ErrorNames';

class BaseError {
  code: number | undefined;
  name: ErrorNames;
  message: string;
  statusCode: number;

  constructor(message: string, errorCode?: number) {
    this.code = errorCode;
    this.statusCode = 500;
    this.message = message;
  }
}

export default BaseError;
