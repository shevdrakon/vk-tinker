import {FastifyInstance} from 'fastify';

import authenticationHook from '../fastifyHooks/authenticationHook';
import authorizationRouter from '../api/authorization/authorizationRouter';
import testRouter from '../api/test/testRouter';

const apiRouterPlugin = async (app: FastifyInstance) => {
  app.register(authorizationRouter);

  app.register((app: FastifyInstance, opts, done) => {
    app.addHook('preValidation', authenticationHook);
    app.register(testRouter);

    done();
  });
};

export default apiRouterPlugin;
