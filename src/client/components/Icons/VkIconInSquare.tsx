import React from 'react';

import Icon from './Icon';
import {IIcon} from './icons.types';

const VkIconInSquare = (props: IIcon) => {
  return (
    <Icon viewBox="0 0 50 50" {...props}>
      <path d="M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z" fill="#FFFFFF" />
      <path
        d="M26,34c1,0,1-1.4,1-2c0-1,1-2,2-2s2.7,1.7,4,3c1,1,1,1,2,1s3,0,3,0s2-0.1,2-2c0-0.6-0.7-1.7-3-4  c-2-2-3-1,0-5c1.8-2.5,3.2-4.7,3-5.3c-0.2-0.6-5.3-1.6-6-0.7c-2,3-2.4,3.7-3,5c-1,2-1.1,3-2,3c-0.9,0-1-1.9-1-3c0-3.3,0.5-5.6-1-6  c0,0-2,0-3,0c-1.6,0-3,1-3,1s-1.2,1-1,1c0.3,0,2-0.4,2,1c0,1,0,2,0,2s0,4-1,4c-1,0-3-4-5-7c-0.8-1.2-1-1-2-1c-1.1,0-2,0-3,0  c-1,0-1.1,0.6-1,1c2,5,3.4,8.1,7.2,12.1c3.5,3.6,5.8,3.8,7.8,3.9C25.5,34,25,34,26,34z"
        fill="#54769B" id="VK_1_" />
    </Icon>
  )
};

export default VkIconInSquare;