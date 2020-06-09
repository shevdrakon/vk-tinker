import {FastifyMiddleware} from 'fastify';
import {TokenTypes} from '../vk/acl/acl.types';

const forceSessionHook: FastifyMiddleware = (request, reply, done) => {
  request.session.authenticated = true;
  request.session.accessToken = {
    tokenType: TokenTypes.Standalone,
    value: '',
    expire: Number.MAX_SAFE_INTEGER,
  };

  request.session.user = {
    domain: 'Vadim',
    first_name: 'Vadim',
    last_name: '',
    id: 1520081,
    photo_50: 'https://sun9-33.userapi.com/c627916/v627916081/3b77a/W9MizWYPYMg.jpg?ava=1',
  };

  done();
};

export default forceSessionHook;
