import {ISpammer} from '../../../server/api/violations/types';

export enum SpammersState {
  initial = 'initial',
  processing = 'processing',
  success = 'success',
  error = 'error',
}

export interface ISpammersState {
  spammersState: SpammersState;
  items: ISpammer[];
}
