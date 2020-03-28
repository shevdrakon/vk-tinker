import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import rootReducer from './rootReducer';

interface IStoreProviderProps {
  children?: React.ReactNode;
}

const StoreProvider = (props: IStoreProviderProps) => {
  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));

  return <Provider store={store}>
    {props.children}
  </Provider>
};

export default StoreProvider;
