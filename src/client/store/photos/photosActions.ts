import {createAction} from '@reduxjs/toolkit'
import {createAsyncThunk} from '../utils/createAsyncThunk';
import {IGetPhotosResponse} from '../../../server/api/photos/types';

export const fetchPhotos = createAsyncThunk<void, IGetPhotosResponse>(
  'PHOTOS/FETCH',
  async (_, {extra}) => {
    const {api: {photosService}} = extra;

    try {
      return await photosService.getPhotos();
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

interface IMovePhotosArgs {
  photosIds: number[];
  targetAlbumId: number;
}

export const movePhotos = createAsyncThunk<IMovePhotosArgs, void>(
  'PHOTOS/MOVE',
  (args, {extra}) => {
    const {api: {photosService}} = extra;

    try {
      return photosService.movePhotos(args);
    } catch {
      throw `Unable to move photos into album. Please try again.`;
    }
  }
);

export const togglePhotoSelect = createAction<number>('PHOTOS/TOGGLE_SELECT');
export const clearPhotoSelection = createAction<number>('PHOTOS/CLEAR_SELECTION');
