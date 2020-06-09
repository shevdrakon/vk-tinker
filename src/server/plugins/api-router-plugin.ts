import {FastifyInstance} from 'fastify';

import authenticationHook from '../fastifyHooks/authenticationHook';
import authorizationRouter from '../api/authorization/authorizationRouter';
import userRouter from '../api/user/userRouter';
import photosRouter from '../api/photos/photosRouter';
import violationsRouter from '../api/violations/violationsRouter';
import forceSessionHook from '../fastifyHooks/forceSessionHook';

const apiRouterPlugin = async (app: FastifyInstance) => {
  app.addHook('preValidation', forceSessionHook);

  app.register(authorizationRouter);

  app.register((app: FastifyInstance, opts, done) => {
    app.addHook('preValidation', authenticationHook);
    app.register(userRouter);
    app.register(photosRouter);
    app.register(violationsRouter);

    done();
  });
};

export default apiRouterPlugin;
