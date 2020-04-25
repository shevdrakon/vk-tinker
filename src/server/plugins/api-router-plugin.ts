import {FastifyInstance} from 'fastify';

import testRouter from '../api/test/messages-router'
import authorizationRouter from '../api/auth/authorizationRouter';

const apiRouterPlugin = async (app: FastifyInstance) => {
  app.register(authorizationRouter, {prefix: '/'});
  app.register(testRouter, {prefix: '/test'});
};

export default apiRouterPlugin;
