import {IAclPermission, TokenType} from './acl.types';

export enum GroupsPermissions {
  get = 1 << 0,
  getById = 1 << 1,
  getBanned = 1 << 2,
  getRequests = 1 << 3,
  ban = 1 << 4,
  approveRequest = 1 << 5,
  removeUser = 1 << 6,
}

export const groupsAcl: Array<IAclPermission> = [
  {
    name: 'get',
    permission: GroupsPermissions.get,
    url: 'https://vk.com/dev/groups.get',
    accessLevel: TokenType.user,
  },
  {
    name: 'getById',
    permission: GroupsPermissions.getById,
    url: 'https://vk.com/dev/groups.getById',
    accessLevel: TokenType.user,
  },
  {
    name: 'getBanned',
    permission: GroupsPermissions.getBanned,
    url: 'https://vk.com/dev/groups.getBanned',
    accessLevel: TokenType.standalone,
  },
  {
    name: 'getRequests',
    permission: GroupsPermissions.getRequests,
    url: 'https://vk.com/dev/groups.getRequests',
    accessLevel: TokenType.standalone,
  },
  {
    name: 'ban',
    permission: GroupsPermissions.ban,
    url: 'https://vk.com/dev/groups.ban',
    accessLevel: TokenType.standalone,
  },
  {
    name: 'approveRequest',
    permission: GroupsPermissions.approveRequest,
    url: 'https://vk.com/dev/groups.approveRequest',
    accessLevel: TokenType.standalone,
  },
  {
    name: 'removeUser',
    permission: GroupsPermissions.removeUser,
    url: 'https://vk.com/dev/groups.removeUser',
    accessLevel: TokenType.standalone,
  },
];
