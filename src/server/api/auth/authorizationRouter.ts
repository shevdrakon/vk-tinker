import {FastifyInstance} from 'fastify';
import fastifyFormBody from 'fastify-formbody';

import AuthorizationController from './AuthorizationController';

const authorizationRouter = async (app: FastifyInstance) => {
  app.register(fastifyFormBody);

  app.post('/login', async (request, reply) => {
    const controller = new AuthorizationController(request, reply);
    const isTokenPass = typeof request.body === 'string';

    if (isTokenPass)
      return controller.loginByAccessToken();

    return controller.loginByVkLoginStatus();
  })
};

export default authorizationRouter;
