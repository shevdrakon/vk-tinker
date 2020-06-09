import {createReducer} from '@reduxjs/toolkit';
import * as A from './spammersActions';
import {ISpammersState, SpammersState} from './spammers.types';

const initialState: ISpammersState = {
  spammersState: SpammersState.initial,
  items: [],
};

const spammersReducer = createReducer<ISpammersState>(initialState, builder => {
  builder.addCase(A.fetchSpam.pending, (state) => {
    return {
      ...state,
      spammersState: SpammersState.processing,
    }
  });
  builder.addCase(A.fetchSpam.rejected, (state, {error}) => {
    return {
      ...state,
      spammersState: SpammersState.error,
    }
  });
  builder.addCase(A.fetchSpam.fulfilled, (state, {payload}) => {
    const items = payload;

    return {
      ...state,
      items,
      spammersState: SpammersState.success,
    }
  });
});

export default spammersReducer;
