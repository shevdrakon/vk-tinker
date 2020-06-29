import {IAlbum, IPhoto} from '../../vk/vk-api/photos/photos.types';
import {IVkComment} from '../../vk/vk-api/comments/comments.type';
import {IVkUser} from '../../vk/vk-api/users/users.types';
import {IPhotoRuleResult} from '../../PhotoRules/rules.types';

export interface IGetAlbumsResponse {
  items: IAlbum[];
  itemsTotalCount: number;
}

export interface IGetPhotosResponse {
  items: (IPhoto & {
    comments: IVkComment[];
    rules: Record<string, IPhotoRuleResult>;
  })[];
  itemsTotalCount: number;
  itemsSkipped: number;
  users: Record<number, IVkUser>;
}
