import BaseController from '../utils/BaseController';
import VkPhotosService from '../../vk/vk-api/photos/VkPhotosService';
import {rangeToChunks} from '../../lib/chunk';

import {GetSpammersResponse} from './types';

class ViolationsController extends BaseController {
  async getSpammers(args?: { start_date: number; end_date: number; }): Promise<GetSpammersResponse> {
    const accessToken = this.request.session.accessToken.value;
    const service = new VkPhotosService({accessToken});

    const {start_date, end_date} = args;
    const [startPosition, endPosition] = await Promise.all([
      service.findFirstPhotoPositionByDate(start_date),
      service.findFirstPhotoPositionByDate(end_date),
    ]);

    const start = Math.max(Math.min(startPosition.left, startPosition.right), 0);
    const end = Math.max(Math.min(endPosition.left, endPosition.right), 0);
    const chunks = await Promise.all(
      rangeToChunks(end, start, 200).map(({from, count}) => service.getAllWithUsers({offset: from, count}))
    );

    const photos = chunks.map(x => x.items).reduce((acc, curr) => acc.concat(curr), []);
    const usersHash = chunks.map(x => x.users.inPhotos)
      .reduce((acc, curr) => acc.concat(curr), [])
      .reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});

    const groupByUser = photos.reduce((acc, photo) => {
      acc[photo.user_id] = (acc[photo.user_id] || []).concat(photo);
      return acc;
    }, {});

    return Object.keys(groupByUser)
      .filter(user_id => groupByUser[user_id].length > 3)
      .map(user_id => ({user: usersHash[user_id], photos: groupByUser[user_id]}))
      .sort((a, b) => b.photos.length - a.photos.length);
  }
}

export default ViolationsController;
