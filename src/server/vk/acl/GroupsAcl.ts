import {IAclPermission, TokenTypes} from './acl.types';

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
    accessLevel: TokenTypes.User,
  },
  {
    name: 'getById',
    permission: GroupsPermissions.getById,
    url: 'https://vk.com/dev/groups.getById',
    accessLevel: TokenTypes.User,
  },
  {
    name: 'getBanned',
    permission: GroupsPermissions.getBanned,
    url: 'https://vk.com/dev/groups.getBanned',
    accessLevel: TokenTypes.Standalone,
  },
  {
    name: 'getRequests',
    permission: GroupsPermissions.getRequests,
    url: 'https://vk.com/dev/groups.getRequests',
    accessLevel: TokenTypes.Standalone,
  },
  {
    name: 'ban',
    permission: GroupsPermissions.ban,
    url: 'https://vk.com/dev/groups.ban',
    accessLevel: TokenTypes.Standalone,
  },
  {
    name: 'approveRequest',
    permission: GroupsPermissions.approveRequest,
    url: 'https://vk.com/dev/groups.approveRequest',
    accessLevel: TokenTypes.Standalone,
  },
  {
    name: 'removeUser',
    permission: GroupsPermissions.removeUser,
    url: 'https://vk.com/dev/groups.removeUser',
    accessLevel: TokenTypes.Standalone,
  },
];
