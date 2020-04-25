import {Plugin} from 'fastify';

import fastifySession from 'fastify-session';
import fastifyCookie from 'fastify-cookie';
import expressSession from 'express-session';
import MemoryStore from 'memorystore';

import config from '../config';
import apiRouterPlugin from './api-router-plugin'
import authenticationHook from '../hooks/authentication-hook';

const Store = MemoryStore(expressSession);

const appRoutingPlugin: Plugin<any, any, any, any> = (app, options, next) => {
  app.register(fastifyCookie);
  app.register(fastifySession, {
    secret: config.sessionCookieSecret,
    cookie: {secure: false},
    saveUninitialized: false,
    store: new Store(),
  });

  app.addHook('preValidation', authenticationHook);
  app.register(apiRouterPlugin, {prefix: '/api'});

  next();
};

export default appRoutingPlugin;
