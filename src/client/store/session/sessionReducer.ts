import {handleActions} from 'redux-actions';
import * as A from './sessionActions';

const initialState = {
  // @ts-ignore
  applicationId: window.appConfig.applicationId
};

const sessionReducer = handleActions({
  [A.notAuthorized.toString()]: (state, {payload}) => {
    debugger
    return state;
  },
}, initialState);

export default sessionReducer;
