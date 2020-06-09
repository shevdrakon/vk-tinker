import {FastifyInstance} from 'fastify';
import UserController from './UserController';

const userRouter = async (app: FastifyInstance) => {
  app.get('/user', async (request, reply) => {
      return new UserController(request, reply).getCurrentUserInfo();
    },
  )
};

export default userRouter;
