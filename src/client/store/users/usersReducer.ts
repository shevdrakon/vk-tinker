import {createReducer} from '@reduxjs/toolkit';
import * as photosActions from '../photos/photosActions';

import {IUsersState} from './users.types';
import {IVkUser} from '../../../server/vk/vk-api/users/users.types';
import {IAppState} from '../types/store.types';

const initialState: IUsersState = {
  usersHash: {},
};

const usersReducer = createReducer<IUsersState>(initialState, builder => {
  builder.addCase(photosActions.fetchPhotos.fulfilled, (state, {payload}) => {
    const {users} = payload;

    return {
      ...state,
      usersHash: {
        ...state.usersHash,
        ...users,
      }
    }
  });
  builder.addCase(photosActions.fetchNextPagePhotos.fulfilled, (state, {payload}) => {
    const {users} = payload;

    return {
      ...state,
      usersHash: {
        ...state.usersHash,
        ...users,
      }
    }
  });

  builder.addCase(photosActions.fetchAlbumPhotos.fulfilled, (state, {payload}) => {
    const {users} = payload;

    return {
      ...state,
      usersHash: {
        ...state.usersHash,
        ...users,
      }
    }
  });
});

export const SELECTORS = {
  getUserById: (userId: number) => (state: IAppState): IVkUser => {
    return state.users.usersHash[userId];
  }
}

export default usersReducer;
