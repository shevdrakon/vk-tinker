import {FastifyMiddleware} from 'fastify';

const authenticationHook: FastifyMiddleware = (request, reply, done) => {
  const dropSession = () => {
    delete request.session.accessToken;
    delete request.session.authenticated;
  }

  const {accessToken} = request.session;

  if (!accessToken || !accessToken.value || !accessToken.expire) {
    dropSession();
    reply.code(401).send();
  } else {
    const {expire} = accessToken;

    if (new Date(expire * 1000) >= new Date()) {
      dropSession();
      reply.code(401).send();
    }
  }

  done();
};

export default authenticationHook;
