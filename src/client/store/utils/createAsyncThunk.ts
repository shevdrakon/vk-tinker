import {AsyncThunkPayloadCreator, createAsyncThunk as ReduxToolkitCreateAsyncThunk} from '@reduxjs/toolkit';
import {IApiServices} from '../../api/types';

export interface ThunkConfig {
  extra: {
    api: IApiServices;
  }
}

export type PayloadCreator<TArg, TReturned> = AsyncThunkPayloadCreator<TReturned, TArg, ThunkConfig>;

export const createAsyncThunk = <TArg, TReturned>(type: string, payloadCreator: PayloadCreator<TArg, TReturned>) => {
  return ReduxToolkitCreateAsyncThunk(type, payloadCreator);
}
