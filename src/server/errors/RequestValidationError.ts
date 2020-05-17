import {ErrorNames} from './ErrorNames';
import BaseError from './BaseError';

class RequestValidationError extends BaseError {
  message: string;

  constructor(message: string) {
    super(message);

    this.name = ErrorNames.RequestValidationError;
    this.statusCode = 400;
  }
}

export default RequestValidationError;
