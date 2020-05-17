import {ErrorNames} from './ErrorNames';
import BaseError from './BaseError';

class GenericError extends BaseError {
  message: string;

  constructor(message: string) {
    super(message);

    this.name = ErrorNames.GenericError;
    this.message = message;
  }
}

export default GenericError;
