import {ErrorNames} from './ErrorNames';
import BaseError from './BaseError';

class VkApiRequestError extends BaseError {
  constructor(message: string, errorCode: number) {
    super(message, errorCode);

    this.name = ErrorNames.ApiCallError;
    this.statusCode = errorCode === 5 ? 401 : 500;
  }
}

export default VkApiRequestError;
