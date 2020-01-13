import {FastifyInstance} from 'fastify';

import validateAuthorizationHook from '../../hooks/validate-authorization-hook';

// import express from 'express'
//
// import routerActionExecutor from '../../lib/router-action-executor'
// import Controller from './messages-controller'
//
// const legacy = ({config, wsServer}) => {
//   const router = express.Router();
//
//   router.get('/', (req, resp, next) => {
//     const controller = new Controller(req, resp, next, config, wsServer);
//     routerActionExecutor(controller, controller.getMessages);
//   });
//
//   router.post('/', (req, resp, next) => {
//     const controller = new Controller(req, resp, next, config, wsServer);
//     routerActionExecutor(controller, controller.sendMessage);
//   });
//
//   return router;
// }

const testRouter = async (app: FastifyInstance) => {
  app.addHook('preValidation', validateAuthorizationHook);

  app.get('/', async (request, reply) => {
    return {hello: 'world'}
  })
}

export default testRouter;
