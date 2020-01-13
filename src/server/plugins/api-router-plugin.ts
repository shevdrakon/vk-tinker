import {FastifyInstance} from 'fastify';

import testRouter from '../api/test/messages-router'

const apiRouterPlugin = async (app: FastifyInstance) => {
  app.register(testRouter, {prefix: '/test'});
}

export default apiRouterPlugin;
