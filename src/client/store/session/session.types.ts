import {ISessionUser} from '../../../../types/fastify';

export enum LoginState {
  initial = 'initial',
  processing = 'processing',
  success = 'success',
  error = 'error',
}

export interface ISessionState {
  loginState: LoginState;
  accessTokenError: string;
  user: ISessionUser;
}
