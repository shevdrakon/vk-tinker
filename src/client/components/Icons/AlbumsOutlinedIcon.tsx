import React from 'react';

import Icon from './Icon';
import {IIcon} from './icons.types';

const AlbumsOutlinedIcon = (props: IIcon) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h5v7l2.5-1.88L18 11V4h2v12z" />
    </Icon>
  )
};

export default AlbumsOutlinedIcon;
