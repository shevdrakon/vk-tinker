import createConfigReducer from './config/configReducer';

import sessionReducer from './session/sessionReducer';
import photosReducer from './photos/photosReducer';
import usersReducer from './users/usersReducer';
import albumsReducer from './albums/albumsReducer';
import spammersReducer from './spammers/spammersReducer';
import photosSelectionReducer from './photosSelection/photosSelectionReducer';

const createRootReducer = (config: IAppConfig) => ({
  config: createConfigReducer(config),
  session: sessionReducer,
  photos: photosReducer,
  users: usersReducer,
  albums: albumsReducer,
  spammers: spammersReducer,
  selection: photosSelectionReducer,
});

export default createRootReducer;
