import {FastifyInstance} from 'fastify';
import ViolationsController from './ViolationsController';

const violationsRouter = async (app: FastifyInstance) => {
  app.get('/violations/spam',
    {
      schema: {
        querystring: {
          from: {
            type: 'number',
            required: ['from'],
          },
          to: {
            type: 'number',
            required: ['to'],
          },
        },
      },
    }, (request, reply) => {
      const {from, to} = request.query;
      const args = {
        start_date: from,
        end_date: to,
      };

      return new ViolationsController(request, reply).getSpammers(args);
    },
  );
};

export default violationsRouter;
