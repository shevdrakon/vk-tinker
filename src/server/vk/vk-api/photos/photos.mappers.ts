import {IVkAlbum, IVkPhoto} from './vk.photos.types';
import {IAlbum, IPhoto} from './photos.types';

export const vkAlbumToResponseAlbum = (vkPhoto: IVkAlbum): IAlbum => {
  const {id, created, updated, description, owner_id, size, sizes, title, thumb_id} = vkPhoto;

  return {
    id, created, updated, description, owner_id, size, title, thumb_id,
    sizes: arrayToHash(sizes),
  }
}

export const vkPhotoToResponsePhoto = (vkPhoto: IVkPhoto): IPhoto => {
  const {album_id, id, text, date, user_id, owner_id, sizes} = vkPhoto;

  return {
    album_id, id, text, date, user_id, owner_id,
    sizes: arrayToHash(sizes),
  }
}

const arrayToHash = (items: { type: string }[]) => {
  return items.reduce((acc, cur) => ({
    ...acc,
    [cur.type]: cur,
  }), {});
}
