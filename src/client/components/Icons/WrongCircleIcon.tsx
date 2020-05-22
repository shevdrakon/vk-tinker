import React from 'react';

import Icon from './Icon';
import {IIcon} from './icons.types';

const WrongCircleIcon = (props: IIcon) => {
  return (
    <Icon viewBox="0 0 50 50" {...props}>
      <circle fill="inherit" cx="25" cy="25" r="25" />
      <polyline style={{fill: "none", stroke: "#FFFFFF", strokeWidth: 2, strokeLinecap: "round", strokeMiterlimit: 10}}
                points="16,34 25,25 34,16" />
      <polyline style={{fill: "none", stroke: "#FFFFFF", strokeWidth: 2, strokeLinecap: "round", strokeMiterlimit: 10}}
                points="16,16 25,25 34,34" />
    </Icon>
  )
};

export default WrongCircleIcon;
