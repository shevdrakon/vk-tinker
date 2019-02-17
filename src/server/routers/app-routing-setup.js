//import path from 'path';

import apiRouter from './api-router'
//import errorHandler from '../lib/error-handler'
//import PageLoading from '../../shared/components/pages/page-loading'

const appRoutingSetup = (app) => {

  app.register(apiRouter, {prefix: '/api'})

  //appRoutingSetup.use(express.static(path.join(__dirname, '../../client/static')));
  //appRoutingSetup.use('/api', apiRouter(wsServer));
  //appRoutingSetup.get('*', ssrRouter(PageLoading));

  //appRoutingSetup.use(errorHandler());
}

export default appRoutingSetup;
