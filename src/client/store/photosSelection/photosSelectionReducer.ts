import {createReducer, createSelector} from '@reduxjs/toolkit';
import * as A from './photosSelectionActions';

import {IPhotosSelectionState, PhotosActionsMode} from './photosSelection.types';
import {IAppState} from '../types/store.types';

const initialState: IPhotosSelectionState = {
  selected: {},
};

const photosSelectionReducer = createReducer<IPhotosSelectionState>(initialState, builder => {
  builder.addCase(A.togglePhotoSelect, (state, action) => {
    const {payload: photoId} = action;
    const currentValue = state.selected[photoId];

    if (currentValue === true) {
      delete state.selected[photoId];
    } else {
      state.selected[photoId] = true;
    }
  });
  
  builder.addCase(A.clearPhotoSelection, (state) => {
    state.selected = {};
  });
});

const getMode = createSelector<IAppState, Record<number, boolean>, PhotosActionsMode>(
  [state => state.selection.selected],
  selected => {
    const hasSelectedKey = !!Object.keys(selected).find(x => !!selected[x]);
    return hasSelectedKey ? PhotosActionsMode.edit : PhotosActionsMode.view;
  });

const getSelected = createSelector<IAppState, Record<number, boolean>, number[]>(
  [state => state.selection.selected],
  selected => {
    return Object.keys(selected).filter(x => !!selected[x]).map(Number);
  }
);

export const SELECTORS = {
  isSelected: (photoId: number) => (state: IAppState) => {
    return !!state.selection.selected[photoId];
  },

  getMode,
  getSelected,
};

export default photosSelectionReducer;
