import {IStore} from '../types/store.types';

const getLoginState = (state: IStore) => state.session.loginState;

export const SELECTORS = {
  getLoginState,
};
