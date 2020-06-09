import VkAuth from './VkAuth';

import {IApiServices} from './types';
import createLoginService from './loginService';
import createPhotosService from './photosService';
import createViolationsService from './violationsService';

const createApiServices = (config: IAppConfig): IApiServices => {
  const {applicationId} = config;

  return {
    loginService: createLoginService(config),
    photosService: createPhotosService(config),
    violationsService: createViolationsService(config),
    vkAuthService: new VkAuth({applicationId})
  }
};

export default createApiServices;
