import VkApiService from '../VkApiService';
import {vkPhotoToResponsePhoto, vkAlbumToResponseAlbum} from './photos.mappers';

import config from '../../../config';

import {
  IAggregatedVkPhotosResponse,
  IFirstPhotoByDateResponse,
  IMovePhotoResponse,
  IVkAlbumsResponse, IVkGetPhotosWithUsersResponse
} from './vk.photos.types';

import {IVkComment} from '../comments/comments.type';
import {IVkUser} from '../users/users.types';
import {IAlbum, IPhoto} from './photos.types';

interface IGetAlbumsResponse {
  items: IAlbum[];
  itemsTotalCount: number;
}

interface IGetPhotosResponse {
  items: (IPhoto & { comments: IVkComment[] })[];
  itemsTotalCount: number;
  users: Record<number, IVkUser>;
}

interface IGetPhotosWithUsersResponse {
  items: IPhoto[];
  users: {
    inPhotos: IVkUser[];
  }
}

class VkPhotosService extends VkApiService {
  async getAlbums(): Promise<IGetAlbumsResponse> {
    const payload = {
      owner_id: -config.vkGroup.id,
      need_covers: 1,
      photo_sizes: 1,
    };

    const response = await this.execute<IVkAlbumsResponse>('photos.getAlbums', payload);

    return {
      items: response.items.map(vkAlbumToResponseAlbum).sort((x, y) => y.updated - x.updated),
      itemsTotalCount: response.count,
    }
  }

  async getPhotos(payload: { offset: number; count: number; }): Promise<IGetPhotosResponse> {
    const {count} = payload;
    if (count > 20) throw `Unable to retrieve mor then 20 photos by request.`;

    const response = await this.execute<IAggregatedVkPhotosResponse>('execute.photos_getAll', payload);

    const usersHash = [...response.users.inComments, ...response.users.inPhotos]
      .reduce((acc, cur) => ({
        ...acc,
        [cur.id]: cur,
      }), {});

    return {
      items: response.items.map(x => ({...vkPhotoToResponsePhoto(x), comments: x.comments})),
      itemsTotalCount: response.itemsTotalCount,
      users: usersHash,
    };
  }

  async movePhoto(args: { target_album_id: number, photo_id: number }): Promise<IMovePhotoResponse> {
    const {target_album_id, photo_id} = args;

    if (target_album_id <= 0) throw `Invalid target album id.`
    if (photo_id <= 0) throw `Invalid photo id.`

    const payload = {
      owner_id: -config.vkGroup.id,
      photo_id,
      target_album_id,
    };

    const result = await this.execute<number>('photos.move', payload);
    const success = result === 1;

    return {
      success,
      photo_id,
      album_id: success ? target_album_id : -1,
    }
  }

  findFirstPhotoPositionByDate(date: number): Promise<IFirstPhotoByDateResponse> {
    if (date <= 0) throw `date should have a positive value.`

    const payload = {date};
    return this.execute<IFirstPhotoByDateResponse>('execute.bsearch_first_photo_position_by_date', payload);
  }

  async getAllWithUsers(args: { offset: number; count: number; }): Promise<IGetPhotosWithUsersResponse> {
    const {offset, count} = args;
    if (offset < 0 || count < 0) throw 'Args should be a positive values.'

    const payload = {
      offset,
      count,
    };

    const {items, users} = await this.execute<IVkGetPhotosWithUsersResponse>('execute.photos_getAll_with_user', payload);

    return {
      items: items.map(vkPhotoToResponsePhoto),
      users,
    }
  }
}

export default VkPhotosService;
