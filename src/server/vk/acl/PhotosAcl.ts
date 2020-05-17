import {IAclPermission, TokenTypes} from './acl.types';

export enum PhotosPermissions {
  get = 1 << 0,
  getById = 1 << 1,
  getAll = 1 << 2,
  delete = 1 << 3,
  edit = 1 << 4,
  getAlbums = 1 << 5,
  editAlbum = 1 << 6,
  getAllComments = 1 << 7,
  getComments = 1 << 8,
  createComment = 1 << 9,
  deleteComment = 1 << 10,
  editComment = 1 << 11,
  move = 1 << 11,
}

export const photosAcl: Array<IAclPermission> = [
  {
    name: 'get',
    permission: PhotosPermissions.get,
    url: 'https://vk.com/dev/photos.get',
    accessLevel: TokenTypes.User,
  },
  {
    name: 'getById',
    permission: PhotosPermissions.getById,
    url: 'https://vk.com/dev/photos.getById',
    accessLevel: TokenTypes.User,
  },
  {
    name: 'getAll',
    permission: PhotosPermissions.getAll,
    url: 'https://vk.com/dev/photos.getAll',
    accessLevel: TokenTypes.User,
  },
  {
    name: 'delete',
    permission: PhotosPermissions.delete,
    url: 'https://vk.com/dev/photos.delete',
    accessLevel: TokenTypes.Standalone,
  },
  {
    name: 'edit',
    permission: PhotosPermissions.edit,
    url: 'https://vk.com/dev/photos.edit',
    accessLevel: TokenTypes.User,
  },
  {
    name: 'getAlbums',
    permission: PhotosPermissions.getAlbums,
    url: 'https://vk.com/dev/photos.getAlbums',
    accessLevel: TokenTypes.User,
  },
  {
    name: 'editAlbum',
    permission: PhotosPermissions.editAlbum,
    url: 'https://vk.com/dev/photos.editAlbum',
    accessLevel: TokenTypes.User,
  },
  {
    name: 'getAllComments',
    permission: PhotosPermissions.getAllComments,
    url: 'https://vk.com/dev/photos.getAllComments',
    accessLevel: TokenTypes.User,
  },
  {
    name: 'getComments',
    permission: PhotosPermissions.getComments,
    url: 'https://vk.com/dev/photos.getComments',
    accessLevel: TokenTypes.User,
  },
  {
    name: 'createComment',
    permission: PhotosPermissions.createComment,
    url: 'https://vk.com/dev/photos.createComment',
    accessLevel: TokenTypes.Standalone,
  },
  {
    name: 'deleteComment',
    permission: PhotosPermissions.deleteComment,
    url: 'https://vk.com/dev/photos.deleteComment',
    accessLevel: TokenTypes.Standalone,
  },
  {
    name: 'editComment',
    permission: PhotosPermissions.editComment,
    url: 'https://vk.com/dev/photos.editComment',
    accessLevel: TokenTypes.Standalone,
  },
  {
    name: 'move',
    permission: PhotosPermissions.move,
    url: 'https://vk.com/dev/photos.move',
    accessLevel: TokenTypes.User,
  },
];
