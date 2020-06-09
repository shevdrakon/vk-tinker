import {IVkComment} from '../comments/comments.type';
import {IVkUser} from '../users/users.types';

// https://vk.com/dev/photo_sizes
export declare type VkPhotoSizeTypes = 's' | 'm' | 'x' | 'o' | 'p' | 'q' | 'r' | 'y' | 'z' | 'w';

export interface IVkPhotoSize {
  type: VkPhotoSizeTypes,
  url: string;
  width: number;
  height: number;
}

export interface IVkAlbumSize {
  type: VkPhotoSizeTypes,
  src: string;
  width: number;
  height: number;
}

/* *
  https://vk.com/dev/photos.getAlbums?params[owner_id]=-106168410&params[need_system]=0&params[need_covers]=0&params[photo_sizes]=0&params[v]=5.103
 */
export interface IVkAlbum {
  id: number;
  thumb_id: number;
  owner_id: number;
  title: string;
  description: string;
  created: number;
  updated: number;
  size: number;
  sizes: IVkAlbumSize[];
}

export interface IVkAlbumsResponse {
  count: number;
  items: IVkAlbum[];
}

export interface IVkPhoto {
  id: number;
  album_id: number;
  owner_id: number;
  user_id: number;
  sizes: IVkPhotoSize[];
  text: string;
  date: number;
}

export interface IVkPhotoWithComments extends IVkPhoto {
  comments: IVkComment[];
}

export interface IAggregatedVkPhotosResponse {
  items: IVkPhotoWithComments[];
  itemsTotalCount: number;
  users: {
    inPhotos: IVkUser[];
    inComments: IVkUser[];
  }
}

export interface IMovePhotoResponse {
  photo_id: number;
  album_id: number;
  success: boolean;
}

export interface IFirstPhotoByDateResponse {
  left: number;
  right: number;
}

export interface IVkGetPhotosWithUsersResponse {
  items: IVkPhoto[];
  itemsTotalCount: number;
  users: {
    inPhotos: IVkUser[];
  }
}
