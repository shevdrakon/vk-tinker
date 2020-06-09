import React from 'react';
import {NavLink} from 'react-router-dom';

import Hidden from '@material-ui/core/Hidden';

import IconButton from '../../../../../components/Buttons/IconButton';
import Button from '../../../../../components/Buttons/Button';
import HeaderActions from '../AppHeaderActions/HeaderActions';
import UserMenu from '../UserMenu/UserMenu';
import MoreVerticalIcon from '../../../../../components/Icons/MoreVerticalIcon';

import styles from './HeaderMainContent.module.scss';
import bemFactory from '../../../../../lib/bem-factory';

const {block, element} = bemFactory('header-main-content', styles);

const HeaderMainContent = () => {
  return <div className={block()}>
    <div>
      <Hidden xsDown implementation="css">
        <NavLink to="/">
          <Button variant="text" className={element('title')}>Mommy's Treasure</Button>
        </NavLink>
      </Hidden>
      <Hidden smUp implementation="css">
        <NavLink to="/">
          <Button variant="text" className={element('title')}>M'sTreasure</Button>
        </NavLink>
      </Hidden>
    </div>
    <div className={element('actions-container')}>
      <Hidden smDown implementation="css">
        <HeaderActions />
      </Hidden>
      <UserMenu />
      {/*<Hidden mdUp implementation="css">*/}
      <IconButton color="inherit" className={element('icon')}>
        <MoreVerticalIcon />
      </IconButton>
      {/*</Hidden>*/}
    </div>
  </div>
};

export default HeaderMainContent;
