import {IVkAlbumSize, IVkPhotoSize} from './vk.photos.types';

export interface IAlbum {
  id: number;
  thumb_id: number;
  owner_id: number;
  title: string;
  description: string;
  created: number;
  updated: number;
  size: number;
  sizes: Record<string, IVkAlbumSize>;
}

export interface IPhoto {
  id: number;
  album_id: number;
  owner_id: number;
  user_id: number;
  text: string;
  date: number;
  sizes: Record<string, IVkPhotoSize>;
}
