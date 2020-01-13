import {FastifyMiddleware} from 'fastify';

const authenticationHook: FastifyMiddleware = (request, reply, done) => {
  const {user} = request.session || {user: undefined};

  if (user && user.accessToken) {
    // touch session to slide expiration
    request.session.touch();
    // check token
  }

  done();
};

export default authenticationHook;
