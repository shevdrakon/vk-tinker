import {AsyncThunkPayloadCreator, createAsyncThunk as ReduxToolkitCreateAsyncThunk} from '@reduxjs/toolkit';
import {IApiServices} from '../../api/types';

export interface ThunkConfig {
  extra: {
    api: IApiServices;
  }
}

export type PayloadCreator<TArg> = AsyncThunkPayloadCreator<any, TArg, ThunkConfig>;

export const createAsyncThunk = <TArg>(type: string, payloadCreator: PayloadCreator<TArg>) => {
  return ReduxToolkitCreateAsyncThunk(type, payloadCreator);
}
