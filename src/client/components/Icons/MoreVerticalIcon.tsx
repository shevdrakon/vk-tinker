import React from 'react';

import Icon from './Icon';
import {IIcon} from './icons.types';

const MoreVerticalIcon = (props: IIcon) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </Icon>
  )
};

export default MoreVerticalIcon;
