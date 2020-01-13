import * as fastify from 'fastify';

declare module 'fastify' {
  interface Session {
    user?: {
      accessToken: string;
    }
  }
}
