import {createReducer, createSelector} from '@reduxjs/toolkit';
import * as A from './photosActions';

import {IPhotosState, PhotosActionsMode, PhotosState} from './photos.types';
import {IAppState} from '../types/store.types';

const initialState: IPhotosState = {
  photosState: PhotosState.initial,
  items: [],
  itemsTotalCount: 0,
  selected: {},
};

const photosReducer = createReducer<IPhotosState>(initialState, builder => {
  builder.addCase(A.fetchPhotos.pending, (state) => {
    return {
      ...state,
      photosState: PhotosState.processing,
    }
  });
  builder.addCase(A.fetchPhotos.rejected, (state, {error}) => {
    return {
      ...state,
      photosState: PhotosState.error,
    }
  });
  builder.addCase(A.fetchPhotos.fulfilled, (state, {payload}) => {
    const {items, itemsTotalCount} = payload;

    return {
      ...state,
      photosState: PhotosState.success,
      items,
      itemsTotalCount,
    }
  });

  builder.addCase(A.fetchAlbumPhotos.pending, (state) => {
    return {
      ...state,
      photosState: PhotosState.processing,
    }
  });
  builder.addCase(A.fetchAlbumPhotos.rejected, (state, {error}) => {
    return {
      ...state,
      photosState: PhotosState.error,
    }
  });
  builder.addCase(A.fetchAlbumPhotos.fulfilled, (state, {payload}) => {
    const {items, itemsTotalCount} = payload;

    return {
      ...state,
      photosState: PhotosState.success,
      items,
      itemsTotalCount,
    }
  });

  builder.addCase(A.togglePhotoSelect, (state, action) => {
    const {payload: photoId} = action;

    return {
      ...state,
      selected: {
        ...state.selected,
        [photoId]: !state.selected[photoId],
      }
    }
  });
  builder.addCase(A.clearPhotoSelection, (state) => {
    return {
      ...state,
      selected: {},
    }
  });
});

const getMode = createSelector<IAppState, Record<number, boolean>, PhotosActionsMode>(
  [state => state.photos.selected],
  selected => {
    const hasSelectedKey = !!Object.keys(selected).find(x => !!selected[x]);
    return hasSelectedKey ? PhotosActionsMode.edit : PhotosActionsMode.view;
  });

const getSelected = createSelector<IAppState, Record<number, boolean>, number[]>(
  [state => state.photos.selected],
  selected => {
    return Object.keys(selected).filter(x => !!selected[x]).map(Number);
  }
);

export const SELECTORS = {
  isSelected: (photoId: number) => (state: IAppState) => {
    return !!state.photos.selected[photoId];
  },

  getMode,
  getSelected,
};

export default photosReducer;
