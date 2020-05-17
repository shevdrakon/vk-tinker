import {FastifyError, FastifyRequest, FastifyReply} from 'fastify';

import BaseError from '../errors/BaseError';
import {VkApiRequestError, RequestValidationError, GenericError} from '../errors/index';

import logger from '../lib/logger';

const errorHandler = (error: FastifyError, request: FastifyRequest, reply: FastifyReply<any>) => {
  let responseError: BaseError;

  if (error.validation) {
    logger.error(`Request validation error: ${error.message}.`)
    responseError = new RequestValidationError(error.message);
  } else if (error instanceof VkApiRequestError) {
    responseError = error;
  } else {
    responseError = new GenericError(error.message);
  }

  reply.status(responseError.statusCode).send(responseError);
};

export default errorHandler;
