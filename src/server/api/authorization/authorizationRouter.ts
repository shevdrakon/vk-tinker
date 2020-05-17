import {FastifyInstance} from 'fastify';
import fastifyFormBody from 'fastify-formbody';

import AuthorizationController from './AuthorizationController';

const authorizationRouter = async (app: FastifyInstance) => {
  app.register(fastifyFormBody);

  app.post('/login', {
      schema: {
        body: {
          type: 'object',
          required: ['access_token', 'access_level'],
          properties: {
            access_token: {type: 'string', minLength: 10, nullable: false},
            expire: {type: 'integer'},
          }
        }
      },
    }, async (request, reply) => {
      const controller = new AuthorizationController(request, reply);
      const {expire} = request.body;

      return !!expire ? controller.loginByVkLoginStatus() : controller.loginByAccessToken();
    },
  )
};

export default authorizationRouter;
