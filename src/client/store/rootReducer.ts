import {combineReducers} from 'redux';

import sessionReducer from './session/sessionReducer';

export default combineReducers([
  sessionReducer,
]);
