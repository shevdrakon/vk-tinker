import {IPhoto} from '../../vk/vk-api/photos/photos.types';
import {IVkUser} from '../../vk/vk-api/users/users.types';

export interface ISpammer {
  user: IVkUser;
  photos: IPhoto[];
}

export type GetSpammersResponse = ISpammer[];
