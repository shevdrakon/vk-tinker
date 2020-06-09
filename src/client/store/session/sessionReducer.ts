import {createReducer} from '@reduxjs/toolkit';
import * as A from './sessionActions';

import {ISessionState, LoginState} from './session.types';

const initialState: ISessionState = {
  loginState: LoginState.initial,
  accessTokenError: null,
  user: null,
};

const sessionReducer = createReducer<ISessionState>(initialState, builder => {
  builder.addCase(A.authorizeAsStandalone.pending, (state) => {
    return {
      ...state,
      loginState: LoginState.processing,
    }
  });
  builder.addCase(A.authorizeAsStandalone.rejected, (state, {error}) => {
    return {
      ...state,
      accessTokenError: error.message,
      loginState: LoginState.error,
    }
  });
  builder.addCase(A.authorizeAsStandalone.fulfilled, (state, {payload}) => {
    return {
      ...state,
      user: payload,
      accessTokenError: null,
      loginState: LoginState.success,
    }
  });
  builder.addCase(A.authorizeWithLimitedAccess.fulfilled, (state, {payload}) => {
    return {
      ...state,
      user: payload,
      accessTokenError: null,
      loginState: LoginState.success,
    }
  });
});

export default sessionReducer;
