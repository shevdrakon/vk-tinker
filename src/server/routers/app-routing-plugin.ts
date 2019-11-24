//import path from 'path';

import apiRouterPlugin from './api-router-plugin'
//import errorHandler from '../lib/error-handler'
//import PageLoading from '../../shared/components/pages/page-loading'

const appRoutingPlugin = (app, options, next) => {
  app.register(apiRouterPlugin, {prefix: '/api'})

  //appRoutingPlugin.use(express.static(path.join(__dirname, '../../client/static')));
  //appRoutingPlugin.use('/api', apiRouterPlugin(wsServer));
  //appRoutingPlugin.get('*', ssrRouter(PageLoading));

  //appRoutingPlugin.use(errorHandler());

  next();
}

export default appRoutingPlugin;
