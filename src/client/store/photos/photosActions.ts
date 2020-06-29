import {createAsyncThunk} from '../utils/createAsyncThunk';
import {IGetPhotosResponse} from '../../../server/api/photos/types';

interface IFetchPhotosArgs {
  start: number;
  page: number;
}

export const fetchPhotos = createAsyncThunk<IFetchPhotosArgs, IGetPhotosResponse>(
  'PHOTOS/FETCH',
  async (args, {extra}) => {
    const {api: {photosService}} = extra;
    let {page, start} = args;

    try {
      return photosService.getPhotos({start, page});
    } catch {
      throw `Unable to fetch photos. Please try again.`;
    }
  }
);

export const fetchNextPagePhotos = createAsyncThunk<IFetchPhotosArgs, IGetPhotosResponse>(
  'PHOTOS/FETCH_NEXT_PAGE',
  async (args, {extra}) => {
    const {api: {photosService}} = extra;
    const {start, page} = args;

    try {
      return photosService.getPhotos({start, page});
    } catch {
      throw `Unable to fetch photos. Please try again.`;
    }
  }
);

interface IFetchAlbumPhotosArgs {
  albumId: number;
}

export const fetchAlbumPhotos = createAsyncThunk<IFetchAlbumPhotosArgs, IGetPhotosResponse>(
  'ALBUM_PHOTOS/FETCH',
  async (args, {extra}) => {
    const {api: {photosService}} = extra;

    try {
      return await photosService.getAlbumPhotos(args);
    } catch {
      throw `Unable to fetch album photos. Please try again.`;
    }
  }
);
