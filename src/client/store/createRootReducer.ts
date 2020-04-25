import sessionReducer from './session/sessionReducer';

const createRootReducer = () => ({
  session: sessionReducer,
});

export default createRootReducer;
