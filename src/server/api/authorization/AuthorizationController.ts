import BaseController from '../utils/BaseController';
import VkSecureService from '../../vk/vk-api/secure/VkSecureService';
import {IVkLoginStatus} from '../../vk/vk-api/openapi.types';

class AuthorizationController extends BaseController {
  async loginByAccessToken() {
    const service = new VkSecureService();
    const {access_token} = this.request.body;

    try {
      const {expire} = await service.checkToken(access_token);
      this.setSessionStatus(access_token, expire);
    } catch (error) {
      if (error.code === 15) {
        error.statusCode = 400;
      }

      throw error;
    }

    this.reply.code(200).send();
  }

  loginByVkLoginStatus() {
    const status: IVkLoginStatus = this.request.body;
    this.setSessionStatus(status.access_token, status.expire);

    this.reply.code(200).send();
  }

  private setSessionStatus(access_token: string, expire: number) {
    this.request.session.cookie.expires = expire * 1000;
    this.request.session.authenticated = true;
    this.request.session.accessToken = {
      value: access_token,
      expire,
    };
  }
}

export default AuthorizationController;
