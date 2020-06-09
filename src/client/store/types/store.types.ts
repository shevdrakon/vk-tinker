import {ISessionState} from '../session/session.types';
import {IConfigState} from '../config/config.types';
import {IPhotosState} from '../photos/photos.types';
import {IUsersState} from '../users/users.types';
import {IAlbumsState} from '../albums/albums.types';
import {ISpammersState} from '../spammers/spammers.types';

export interface IAppState {
  config: IConfigState;
  session: ISessionState;
  photos: IPhotosState;
  albums: IAlbumsState;
  spammers: ISpammersState;
  users: IUsersState;
}
