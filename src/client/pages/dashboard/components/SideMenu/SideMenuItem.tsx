import React from 'react';
import {NavLink} from 'react-router-dom';

import cn from 'classnames';
import ToggleIconButton from '../../../../components/Buttons/ToggleIconButton';

import styles from './SideMenuItem.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import IconButton from '../../../../components/Buttons/IconButton';

const {block, element, modifier} = bemFactory('side-menu-item', styles);

interface ISideMenuItemProps {
  title: string;
  to: string;
  selected: boolean;
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
}

const SideMenuItem = (props: ISideMenuItemProps) => {
  const {selected, title, onIcon, offIcon, to} = props;
  const classes = cn(block(), {
    [modifier('selected')]: selected,
  });

  return <NavLink to={to}>
    <IconButton>
      <div className={classes}>
        <ToggleIconButton selected={selected} onIcon={onIcon} offIcon={offIcon} />
        <span className={element('title')}>{title}</span>
      </div>
    </IconButton>
  </NavLink>
};

export default SideMenuItem;
