import {createReducer} from '@reduxjs/toolkit';
import * as A from './photosActions';

import {IPhotosState, PhotosState} from './photos.types';

const initialState: IPhotosState = {
  photosState: PhotosState.initial,
  items: [],
  itemsTotalCount: 0,
  newItemsCount: 0,
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
    const {items, itemsTotalCount, itemsSkipped} = payload;

    return {
      ...state,
      photosState: PhotosState.success,
      items,
      itemsTotalCount,
      newItemsCount: itemsSkipped,
    }
  });

  builder.addCase(A.fetchNextPagePhotos.pending, state => {
    state.photosState = PhotosState.fetchingNextPage;
  });
  builder.addCase(A.fetchNextPagePhotos.fulfilled, (state, {payload}) => {
    const {items, itemsTotalCount, itemsSkipped} = payload;
    const nextItems = state.items.concat(items);
    const newItemsCount = Math.abs(nextItems.length - 20 - itemsSkipped);

    return {
      ...state,
      photosState: PhotosState.success,
      items: nextItems,
      newItemsCount,
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
});

export default photosReducer;
