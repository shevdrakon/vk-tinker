import BaseController from '../utils/BaseController';
import VkSecureService from '../../vk/vk-api/secure/VkSecureService';
import VkUserService from '../../vk/vk-api/users/VkUserService';

import {IVkLoginStatus} from '../../vk/vk-api/openapi.types';
import {TokenTypes} from '../../vk/acl/acl.types';
import {IVkUser} from '../../vk/vk-api/users/users.types';

class AuthorizationController extends BaseController {
  async loginByAccessToken() {
    const service = new VkSecureService();
    const {access_token} = this.request.body;
    let user = null;

    try {
      const {expire} = await service.checkToken(access_token);
      user = await this.getUserInfo(access_token);

      this.setSessionStatus({
        access_token,
        access_level: TokenTypes.Standalone,
        expire,
        user,
      });
    } catch (error) {
      if (error.code === 15) {
        error.statusCode = 400;
      }

      throw error;
    }

    this.reply.code(200).send(user);
  }

  async loginByVkLoginStatus() {
    const status: IVkLoginStatus = this.request.body;
    const user = await this.getUserInfo(status.access_token);

    this.setSessionStatus({
      access_token: status.access_token,
      access_level: TokenTypes.User,
      expire: status.expire,
      user,
    });

    this.reply.code(200).send(user);
  }

  private async getUserInfo(accessToken: string) {
    return await new VkUserService({accessToken}).getUserInfo();
  }

  private setSessionStatus(arg: { access_token: string, access_level: TokenTypes, expire: number, user: IVkUser }) {
    const {access_token, access_level, expire, user} = arg;

    this.request.session.cookie.expires = expire * 1000;
    this.request.session.authenticated = true;
    this.request.session.user = user;
    this.request.session.accessToken = {
      value: access_token,
      tokenType: access_level,
      expire,
    };
  }
}

export default AuthorizationController;
