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
}
