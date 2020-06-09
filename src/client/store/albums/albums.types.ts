import {IAlbum} from '../../../server/vk/vk-api/photos/photos.types';

export enum AlbumsState {
  initial = 'initial',
  processing = 'processing',
  success = 'success',
  error = 'error',
}

export interface IAlbumsState {
  albumsState: AlbumsState;
  items: IAlbum[];
  itemsTotalCount: number;
}
