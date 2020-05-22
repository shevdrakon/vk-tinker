import React from 'react';

import Icon from './Icon';
import {IIcon} from './icons.types';

const AlbumsFilledIcon = (props: IIcon) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10l-2.5-1.5L13 12V4h5v8zM4 6v14h14v2H4c-1.1 0-2-.9-2-2V6h2z" />
    </Icon>
  )
};

export default AlbumsFilledIcon;
