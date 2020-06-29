import BaseController from '../utils/BaseController';
import VkPhotosService from '../../vk/vk-api/photos/VkPhotosService';

import {IGetAlbumsResponse, IGetPhotosResponse} from './types';
import {checkAllRules} from '../../PhotoRules/rulesChecker';
import {IMovePhotoResponse} from '../../vk/vk-api/photos/vk.photos.types';

class PhotosController extends BaseController {
  async getPhotos(args: { start: number; page: number; album_id?: number }): Promise<IGetPhotosResponse> {
    const accessToken = this.request.session.accessToken.value;
    const service = new VkPhotosService({accessToken});

    const count = 20;
    const {start, page, album_id} = args;
    const skipByPage = (page - 1) * count;

    let skipByStart = 0;
    if (start > 0) {
      const {left, right} = await service.findPhotoPositionById(start);
      skipByStart = Math.max(Math.min(left, right) - 1, 0);
    }

    const offset = skipByPage + skipByStart;
    const payload = {offset, count, album_id};
    const response = await service.getPhotos(payload);

    const items = response.items.map(x => ({
      ...x,
      rules: checkAllRules(x),
    }));

    return {
      items,
      itemsTotalCount: response.itemsTotalCount,
      itemsSkipped: offset,
      users: response.users,
    }
  }

  getAlbums(): Promise<IGetAlbumsResponse> {
    const accessToken = this.request.session.accessToken.value;
    const service = new VkPhotosService({
      accessToken});

    return service.getAlbums();
  }

  movePhotos(args: { target_album_id: number, photosIds: number[] }): Promise<IMovePhotoResponse[]> {
    const accessToken = this.request.session.accessToken.value;
    const service = new VkPhotosService({accessToken});

    const {target_album_id, photosIds} = args;
    return Promise.all(photosIds.map(photo_id => service.movePhoto({target_album_id, photo_id})));
  }
}

export default PhotosController;
