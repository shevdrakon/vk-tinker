import React from 'react';

import Icon from './Icon';
import {IIcon} from './icons.types';

const MenuIcon = (props: IIcon) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Icon>
  )
};

export default MenuIcon;
