import React from 'react';
import {NavLink} from 'react-router-dom';

import MenuIcon from '../../../components/Icons/MenuIcon';
import MoreVerticalIcon from '../../../components/Icons/MoreVerticalIcon';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

import UserMenu from './UserMenu/UserMenu';
import HeaderActions from './HeaderActions/HeaderActions';
import IconButton from '../../../components/Buttons/IconButton'
import Button from '../../../components/Buttons/Button'

import styles from './Header.module.scss';
import bemFactory from '../../../lib/bem-factory';

const {block, element} = bemFactory('app-header', styles);

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={block()} elevation={4}>
      <Toolbar disableGutters className={element('toolbar')}>
        <div className={element('title-container')}>
          <Hidden mdUp>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <NavLink to="/">
            <Button variant="text" className={element('title')}>M'sTreasure</Button>
          </NavLink>
        </div>
        <div className={element('actions-container')}>
          <Hidden smDown implementation="css">
            <HeaderActions />
          </Hidden>
          <UserMenu user={{
            name: 'Vadim',
            img: 'https://sun9-33.userapi.com/c627916/v627916081/3b77a/W9MizWYPYMg.jpg?ava=1',
          }} />
          {/*<Hidden mdUp implementation="css">*/}
          <IconButton color="inherit" className={element('icon')}>
            <MoreVerticalIcon />
          </IconButton>
          {/*</Hidden>*/}
        </div>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          classes={{paper: element('drawer-paper')}}
          onClose={handleDrawerToggle}
        >
          <div>
            rightLinks
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

export default Header;
