import React from 'react';

import Icon from './Icon';
import {IIcon} from './icons.types';

const PhotosFilledIcon = (props: IIcon) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14zm-4.667 8.5l-3.5 4.464L8.5 12.7 5 17.5h14l-4.667-6z" />
    </Icon>
  )
};

export default PhotosFilledIcon;
