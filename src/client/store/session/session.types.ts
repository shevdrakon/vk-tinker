export enum LoginState {
  initial = 'initial',
  processing = 'processing',
  success = 'success',
  error = 'error',
}

export interface ISessionStore {
  loginState: LoginState;
  accessTokenError: string;
}
