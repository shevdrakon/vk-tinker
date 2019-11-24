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

async function routes(app) {
  app.get('/', async (request, reply) => {
    return {hello: 'world'}
  })
}

export default routes;
