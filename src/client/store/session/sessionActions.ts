import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {History} from 'history';

import {ThunkConfig} from '../types/store.types';
import {IVkLoginStatus} from '../../../server/vk/vk-api/openapi.types';

export const authorizeWithLimitedAccess = createAsyncThunk<any, void, ThunkConfig>(
  'SESSION/AUTHORIZE_WITH_LIMITED_ACCESS',
  async (_, {dispatch, extra, rejectWithValue}) => {
    const {api: {vkAuthService}} = extra;

    const vkLoginStatus = await vkAuthService.loginAsUser();

    if (vkLoginStatus.auth) {
      dispatch(login(vkLoginStatus));
    } else {
      rejectWithValue(vkLoginStatus);
    }
  }
);


export const showStandaloneAccessToken = createAsyncThunk<any, void, ThunkConfig>(
  'SESSION/SHOW_STANDALONE_TOKEN',
  (_, {extra}) => {
    const {api: {vkAuthService}} = extra;

    vkAuthService.loginAsStandalone();
  }
);

interface ILoginActionPayload {
  accessToken: string | IVkLoginStatus;
  history: History;
}

export const login = createAsyncThunk<void, ILoginActionPayload, ThunkConfig>(
  'SESSION/LOGIN',
  async (payload, {extra}) => {
    const {api: {loginService}} = extra;
    const {accessToken, history} = payload;

    if (!accessToken) throw Error(`Access token cannot be empty`);

    await loginService.login(accessToken);

    history.push('/');
  }
);

export const notAuthorized = createAction('SESSION/NOT_AUTHORIZED');
