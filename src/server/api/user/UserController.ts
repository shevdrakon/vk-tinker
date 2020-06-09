import BaseController from '../utils/BaseController';
import VkUserService from '../../vk/vk-api/users/VkUserService';

class UserController extends BaseController {
  async getCurrentUserInfo() {
    const {value: accessToken, tokenType} = this.request.session.accessToken;
    const service = new VkUserService({accessToken});

    const userInfo = await service.getUserInfo();

    return userInfo;
  }
}

export default UserController;
