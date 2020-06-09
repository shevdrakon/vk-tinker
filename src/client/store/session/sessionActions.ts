import {createAsyncThunk} from '../utils/createAsyncThunk';

import {History} from 'history';
import {TokenTypes} from '../../../server/vk/acl/acl.types';
import {ISessionUser} from '../../../../types/fastify';

interface IAuthorizeWithLimitedAccessActionPayload {
  history: History;
}

export const authorizeWithLimitedAccess = createAsyncThunk(
  'SESSION/AUTHORIZE_WITH_LIMITED_ACCESS',
  async (payload: IAuthorizeWithLimitedAccessActionPayload, {extra}) => {
    const {api: {vkAuthService, loginService}} = extra;
    const {history} = payload;

    const vkLoginStatus = await vkAuthService.loginAsUser();
    if (!vkLoginStatus.auth) throw `Vk login status is wrong.`

    try {
      const user = await loginService.login({...vkLoginStatus, access_level: TokenTypes.User});
      history.push('/');

      return user;
    } catch {
      throw `Unable to login by user token.`;
    }
  }
);

interface IAuthorizeAsStandaloneActionPayload {
  accessToken: string;
  history: History;
}

export const authorizeAsStandalone = createAsyncThunk(
  'SESSION/AUTHORIZE_AS_STANDALONE',
  async (payload: IAuthorizeAsStandaloneActionPayload, {extra}) => {
    const {accessToken, history} = payload;
    const {api: {loginService}} = extra;

    if (!accessToken) throw `Access token cannot be empty`;

    try {
      const user = await loginService.login({access_token: accessToken, access_level: TokenTypes.Standalone});
      history.push('/');

      return user;
    } catch {
      throw `Unable to login by provided access token. Please try again.`;
    }
  }
);

export const showStandaloneAccessToken = createAsyncThunk(
  'SESSION/SHOW_STANDALONE_TOKEN',
  (_, {extra}) => {
    const {api: {vkAuthService}} = extra;

    vkAuthService.loginAsStandalone();
  }
);
