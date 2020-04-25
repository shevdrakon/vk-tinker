import VkApiService from '../VkApiService';
import config from '../../../config';
import {ITokenCheckResponse} from './secure.types';

class VkSecureService extends VkApiService {
  constructor() {
    super({
      accessToken: config.vkApi.application_token,
    });
  }

  checkToken(access_token: string): Promise<ITokenCheckResponse> {
    const payload = {
      token: access_token,
      client_secret: config.vkApi.application_secret,
    };

    return this.execute('secure.checkToken', payload);
  }
}

export default VkSecureService;
