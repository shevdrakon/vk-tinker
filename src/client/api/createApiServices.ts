import createLoginService from './loginService';
import VkAuth from './VkAuth';

import {IApiServices} from './types';

const createApiServices = (config: IAppConfig): IApiServices => {
  const {applicationId} = config;

  return {
    loginService: createLoginService(config),
    vkAuthService: new VkAuth({applicationId})
  }
};

export default createApiServices;
