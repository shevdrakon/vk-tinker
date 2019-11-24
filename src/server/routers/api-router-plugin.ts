import testRouter from '../api/test/messages-router'

const apiRouterPlugin = async (app) => {
  app.register(testRouter, {prefix: '/test'});
}

export default apiRouterPlugin;
