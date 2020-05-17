import sessionReducer from './session/sessionReducer';
import createConfigReducer from './config/configReducer';

const createRootReducer = (config: IAppConfig) => ({
  config: createConfigReducer(config),
  session: sessionReducer,
});

export default createRootReducer;
