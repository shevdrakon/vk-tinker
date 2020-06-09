import React from 'react';

import Selector from '../../../../../components/Selector/Selector';
import Skeleton from '@material-ui/lab/Skeleton'

import styles from './UserMenu.module.scss';
import bemFactory from '../../../../../lib/bem-factory';

const {element} = bemFactory('user-menu', styles);

const UserMenuGhost = () => {
  return <Selector>
    <Selector.Header>
      <span className={element('name')}>
        <Skeleton variant="text" width={45} />
      </span>
      <Skeleton variant="circle" width={40} height={40} />
    </Selector.Header>
  </Selector>
};

export default UserMenuGhost;
