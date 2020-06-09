import {createAsyncThunk} from '../utils/createAsyncThunk';
import {IGetAlbumsResponse, IGetPhotosResponse} from '../../../server/api/photos/types';
import {IAppState} from '../types/store.types';
import {AlbumsState} from './albums.types';

export const initAlbums = createAsyncThunk<void, void>(
  'ALBUMS/INIT',
  (_, {dispatch, getState}) => {
    const {albumsState} = (getState() as IAppState).albums;

    if (albumsState === AlbumsState.initial) {
      dispatch(fetchAlbums());
    }
  }
);

export const fetchAlbums = createAsyncThunk<void, IGetAlbumsResponse>(
  'ALBUMS/FETCH',
  async (_, {extra}) => {
    const {api: {photosService}} = extra;
    try {
      return await photosService.getAlbums();
    } catch {
      throw `Unable to fetch albums. Please try again.`;
    }
  }
);
