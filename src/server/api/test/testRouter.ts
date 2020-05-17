import {FastifyInstance} from 'fastify';

const testRouter = async (app: FastifyInstance) => {
  app.get('/test', async (request, reply) => {
      return {hello: 'world'}
    },
  )
};

export default testRouter;
