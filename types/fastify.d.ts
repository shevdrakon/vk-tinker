import * as fastify from 'fastify';

declare module 'fastify' {
  interface Session {
    authenticated: boolean;
    accessToken?: {
      value: string;
      expire: number;
    }
  }
}
