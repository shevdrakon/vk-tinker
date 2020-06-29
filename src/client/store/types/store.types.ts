import {ISessionState} from '../session/session.types';
import {IConfigState} from '../config/config.types';
import {IPhotosState} from '../photos/photos.types';
import {IUsersState} from '../users/users.types';
import {IAlbumsState} from '../albums/albums.types';
import {ISpammersState} from '../spammers/spammers.types';
import {IPhotosSelectionState} from '../photosSelection/photosSelection.types';

export interface IAppState {
  config: IConfigState;
  session: ISessionState;
  photos: IPhotosState;
  selection: IPhotosSelectionState;
  albums: IAlbumsState;
  spammers: ISpammersState;
  users: IUsersState;
}
