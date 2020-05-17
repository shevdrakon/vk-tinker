import {Plugin} from 'fastify';

import fastifySession from 'fastify-session';
import fastifyCookie from 'fastify-cookie';
import expressSession from 'express-session';
import MemoryStore from 'memorystore';

import config from '../config';
import apiRouterPlugin from './api-router-plugin'

const Store = MemoryStore(expressSession);

const appRoutingPlugin: Plugin<any, any, any, any> = (app, options, next) => {
  app.register(fastifyCookie);
  app.register(fastifySession, {
    secret: config.sessionCookieSecret,
    cookie: {secure: 'auto'},
    saveUninitialized: false,
    store: new Store(),
  });

  app.register(apiRouterPlugin, {prefix: '/api'});

  next();
};

export default appRoutingPlugin;
