import {ISessionStore} from '../session/session.types';
import {IApiServices} from '../../api/types';

export interface IStore {
  session: ISessionStore;
}

export interface ThunkConfig {
  extra: {
    api: IApiServices;
  }
}
