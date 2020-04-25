import {createReducer} from '@reduxjs/toolkit';
import * as A from './sessionActions';

import {ISessionStore, LoginState} from './session.types';

const initialState: ISessionStore = {
  loginState: LoginState.initial,
  accessTokenError: null,
};

const sessionReducer = createReducer(initialState, builder => {
  builder.addCase(A.login.pending, (state) => {
    return {
      ...state,
      loginState: LoginState.processing,
    }
  });
  builder.addCase(A.login.rejected, (state, {error}) => {
    const {message} = error;
    return {
      ...state,
      accessTokenError: message,
      loginState: LoginState.error,
    }
  });
  builder.addCase(A.login.fulfilled, (state) => {
    return {
      ...state,
      accessTokenError: null,
      loginState: LoginState.success,
    }
  });
});

export default sessionReducer;
