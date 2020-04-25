import {FastifyReply, FastifyRequest} from 'fastify';
import {ServerResponse} from 'http';

class BaseController {
  protected readonly request: FastifyRequest;
  protected readonly reply: FastifyReply<ServerResponse>;

  constructor(request: FastifyRequest, reply: FastifyReply<ServerResponse>) {
    this.request = request;
    this.reply = reply;
  }
}

export default BaseController;
