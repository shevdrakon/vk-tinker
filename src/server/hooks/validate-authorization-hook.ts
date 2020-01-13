import {FastifyMiddleware} from 'fastify';

const validateAuthorizationHook: FastifyMiddleware = (request, reply, done) => {
  if (request.session.user) {
    done();
  } else {
    reply.code(401);
    done(new Error(`Request has no user.`));
  }
};

export default validateAuthorizationHook;
