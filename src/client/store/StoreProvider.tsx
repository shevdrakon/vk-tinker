import React from 'react';
import {Provider} from 'react-redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import createRootReducer from './createRootReducer';
import createApiServices from '../api/createApiServices';

interface IStoreProviderProps {
  children?: React.ReactNode;
}

const StoreProvider = (props: IStoreProviderProps) => {
  const apiServices = createApiServices(window.appConfig);
  const middleware = getDefaultMiddleware({
    thunk: {
      extraArgument: {api: apiServices}
    }
  });

  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: createRootReducer(window.appConfig),
    middleware,
  });

  return <Provider store={store}>
    {props.children}
  </Provider>
};

export default StoreProvider;
