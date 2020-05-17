import {groupsAcl} from './GroupsAcl';
import {photosAcl} from './PhotosAcl';
import {usersAcl} from './UsersAcl';

import {IAclPermission, TokenTypes} from './acl.types';

interface IAllowedActions {
  groups: number;
  photos: number;
  users: number;
}

const getAllowedActions = (accessLevel: TokenTypes): IAllowedActions => {
  const getMaskForAclList = (aclList: Array<IAclPermission>) => aclList
    .filter(x => x.accessLevel === accessLevel)
    .reduce((mask, curr) => mask | curr.permission, 0);

  return {
    groups: getMaskForAclList(groupsAcl),
    photos: getMaskForAclList(photosAcl),
    users: getMaskForAclList(usersAcl),
  };
};

export default getAllowedActions;
