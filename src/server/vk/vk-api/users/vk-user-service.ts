import VkApiService from '../VkApiService';
import {UserFields} from './users.types';

class VkUserService extends VkApiService {
  async getUserInfo() {
    const payload = {
      fields: UserFields.photo_50,
    };

    const response = await this.execute('users.get', payload);

    return response[0];
  }

  getUsers({userIds}) {
    const payload = {
      user_ids: userIds,
      fields: UserFields.photo_50,
    };

    return this.execute('users.get', payload);
  }

  getUsersGroups({userIds}) {
    const payload = {
      user_ids: userIds,
    };

    return this.execute('execute.usersGroups', payload);
  }
}

export default VkUserService;
