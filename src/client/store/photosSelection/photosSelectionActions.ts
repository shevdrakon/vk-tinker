import {createAction} from '@reduxjs/toolkit'
import {createAsyncThunk} from '../utils/createAsyncThunk';

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
