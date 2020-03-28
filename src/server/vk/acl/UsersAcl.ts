import {IAclPermission, TokenType} from './acl.types';

export enum UsersPermissions {
  get = 1 << 0,
  search = 1 << 1,
}

export const usersAcl: Array<IAclPermission> = [
  {
    name: 'get',
    permission: UsersPermissions.get,
    url: 'https://vk.com/dev/users.get',
    accessLevel: TokenType.user,
  },
  {
    name: 'search',
    permission: UsersPermissions.search,
    url: 'https://vk.com/dev/groups.search',
    accessLevel: TokenType.user,
  },
];
