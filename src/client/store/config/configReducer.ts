import {createReducer} from '@reduxjs/toolkit';
import {IConfigState} from './config.types';

const createConfigReducer = (config: IAppConfig) => createReducer<IConfigState>({
  vkGroupUrl: config.vkGroupUrl,
}, () => {
});

export default createConfigReducer;
