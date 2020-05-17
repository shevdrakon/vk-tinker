import React from 'react';

import Icon from './Icon';
import {IIcon} from './icons.types';

const KeyboardArrowDownIcon = (props: IIcon) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </Icon>
  )
};

export default KeyboardArrowDownIcon;
