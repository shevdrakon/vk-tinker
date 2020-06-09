import * as fastify from 'fastify';
import {TokenTypes} from '../src/server/vk/acl/acl.types';
import {IVkUser} from '../src/server/vk/vk-api/users/users.types';

interface ISessionUser extends IVkUser {
}

declare module 'fastify' {

  interface Session {
    authenticated: boolean;
    user: ISessionUser;
    accessToken?: {
      value: string;
      expire: number;
      tokenType: TokenTypes;
    }
  }
}
