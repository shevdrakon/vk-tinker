import React from 'react';
import useAppStateSelector from '../../../../../hooks/useAppStateSelector';

import Selector from '../../../../../components/Selector/Selector';
import Avatar from '../../../../../components/Avatars/Avatar';
import UserMenuGhost from './UserMenu.Ghost';

import styles from './UserMenu.module.scss';
import bemFactory from '../../../../../lib/bem-factory';

const {element} = bemFactory('user-menu', styles);

const UserMenu = () => {
  const user = useAppStateSelector(x => x.session.user);
  // if (!user)
    return <UserMenuGhost />;

  const {first_name, photo_50} = user;

  return <Selector>
    <Selector.Header>
      <span className={element('name')}>{first_name}</span>
      <Avatar src={photo_50} />
    </Selector.Header>
    <Selector.Option>
      Settings
    </Selector.Option>
    <Selector.Divider />
    <Selector.Option>
      Logout
    </Selector.Option>
  </Selector>
};

export default UserMenu;
