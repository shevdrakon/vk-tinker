import {ISessionState} from '../session/session.types';
import {IConfigState} from '../config/config.types';

export interface IAppState {
  config: IConfigState;
  session: ISessionState;
}
