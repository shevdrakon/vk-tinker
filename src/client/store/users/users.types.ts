import {IVkUser} from '../../../server/vk/vk-api/users/users.types';

export interface IUsersState {
  usersHash: Record<number, IVkUser>;
}
