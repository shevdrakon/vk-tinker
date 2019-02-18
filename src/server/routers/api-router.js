import testRouter from '../api/test/messages-router'

const apiRouter = (app, options, next) => {
  app.register(testRouter, {prefix: '/test'});

  next();
}

export default apiRouter;
