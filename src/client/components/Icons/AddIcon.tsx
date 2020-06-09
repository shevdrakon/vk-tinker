import React from 'react';

import Icon from './Icon';
import {IIcon} from './icons.types';

const AddIcon = (props: IIcon) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z" />
    </Icon>
  )
};

export default AddIcon;
