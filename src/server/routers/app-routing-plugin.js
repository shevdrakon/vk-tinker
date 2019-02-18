//import path from 'path';

import apiRouter from './api-router'
//import errorHandler from '../lib/error-handler'
//import PageLoading from '../../shared/components/pages/page-loading'

const appRoutingPlugin = (app, options, next) => {

  app.register(apiRouter, {prefix: '/api'})

  //appRoutingPlugin.use(express.static(path.join(__dirname, '../../client/static')));
  //appRoutingPlugin.use('/api', apiRouter(wsServer));
  //appRoutingPlugin.get('*', ssrRouter(PageLoading));

  //appRoutingPlugin.use(errorHandler());

  next();
}

export default appRoutingPlugin;
