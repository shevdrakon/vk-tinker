import {IVkComment} from '../comments/comments.type';

// https://vk.com/dev/photo_sizes
declare type VkPhotoSizeTypes = 's' | 'm' | 'x' | 'o' | 'p' | 'q' | 'r' | 'y' | 'z' | 'w';

export interface IVkPhotoSize {
  type: VkPhotoSizeTypes,
  url: string;
  width: number;
  height: number;
}

export interface IVkPhoto {
  id: number;
  album_id: number;
  owner_id: number;
  user_id: number;
  sizes: IVkPhotoSize[];
  text: string;
  date: number;
  comments: IVkComment[]
}
