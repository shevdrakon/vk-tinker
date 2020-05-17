import React from 'react';

import Selector from '../../../../components/Selector/Selector';
import Avatar from '../../../../components/Avatars/Avatar';

import styles from './UserMenu.module.scss';
import bemFactory from '../../../../lib/bem-factory';

const {element} = bemFactory('user-menu', styles);

interface IUserMenuProps {
  user: {
    name: string;
    img: string;
  }
}

const UserMenu = (props: IUserMenuProps) => {
  const {user: {name, img}} = props;

  return <Selector>
    <Selector.Header>
      <span className={element('name')}>{name}</span>
      <Avatar src={img} />
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
