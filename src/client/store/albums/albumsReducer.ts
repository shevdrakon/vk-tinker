import {createReducer, createSelector} from '@reduxjs/toolkit';
import * as A from './albumsActions';

import {IAlbumsState, AlbumsState} from './albums.types';
import {IAppState} from '../types/store.types';
import {IAlbum} from '../../../server/vk/vk-api/photos/photos.types';

const initialState: IAlbumsState = {
  albumsState: AlbumsState.initial,
  items: [],
  itemsTotalCount: 0,
};

const albumsReducer = createReducer<IAlbumsState>(initialState, builder => {
  builder.addCase(A.fetchAlbums.pending, (state) => {
    return {
      ...state,
      albumsState: AlbumsState.processing,
    }
  });
  builder.addCase(A.fetchAlbums.rejected, (state, {error}) => {
    return {
      ...state,
      albumsState: AlbumsState.error,
    }
  });
  builder.addCase(A.fetchAlbums.fulfilled, (state, {payload}) => {
    const {items, itemsTotalCount} = payload;

    return {
      ...state,
      albumsState: AlbumsState.success,
      items,
      itemsTotalCount,
    }
  });
});

const getAlbumsHash = createSelector<IAppState, IAlbum[], Record<number, IAlbum>>(
  [state => state.albums.items],
  albums => {
    return albums.reduce((acc, cur) => {
      return {
        ...acc,
        [cur.id]: cur,
      }
    }, {});
  }
);

export const SELECTORS = {
  getAlbumsHash,
};

export default albumsReducer;
