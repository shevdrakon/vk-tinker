import {IAclPermission, TokenType} from './acl.types';

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
    accessLevel: TokenType.user,
  },
  {
    name: 'getById',
    permission: PhotosPermissions.getById,
    url: 'https://vk.com/dev/photos.getById',
    accessLevel: TokenType.user,
  },
  {
    name: 'getAll',
    permission: PhotosPermissions.getAll,
    url: 'https://vk.com/dev/photos.getAll',
    accessLevel: TokenType.user,
  },
  {
    name: 'delete',
    permission: PhotosPermissions.delete,
    url: 'https://vk.com/dev/photos.delete',
    accessLevel: TokenType.standalone,
  },
  {
    name: 'edit',
    permission: PhotosPermissions.edit,
    url: 'https://vk.com/dev/photos.edit',
    accessLevel: TokenType.user,
  },
  {
    name: 'getAlbums',
    permission: PhotosPermissions.getAlbums,
    url: 'https://vk.com/dev/photos.getAlbums',
    accessLevel: TokenType.user,
  },
  {
    name: 'editAlbum',
    permission: PhotosPermissions.editAlbum,
    url: 'https://vk.com/dev/photos.editAlbum',
    accessLevel: TokenType.user,
  },
  {
    name: 'getAllComments',
    permission: PhotosPermissions.getAllComments,
    url: 'https://vk.com/dev/photos.getAllComments',
    accessLevel: TokenType.user,
  },
  {
    name: 'getComments',
    permission: PhotosPermissions.getComments,
    url: 'https://vk.com/dev/photos.getComments',
    accessLevel: TokenType.user,
  },
  {
    name: 'createComment',
    permission: PhotosPermissions.createComment,
    url: 'https://vk.com/dev/photos.createComment',
    accessLevel: TokenType.standalone,
  },
  {
    name: 'deleteComment',
    permission: PhotosPermissions.deleteComment,
    url: 'https://vk.com/dev/photos.deleteComment',
    accessLevel: TokenType.standalone,
  },
  {
    name: 'editComment',
    permission: PhotosPermissions.editComment,
    url: 'https://vk.com/dev/photos.editComment',
    accessLevel: TokenType.standalone,
  },
  {
    name: 'move',
    permission: PhotosPermissions.move,
    url: 'https://vk.com/dev/photos.move',
    accessLevel: TokenType.user,
  },
];
