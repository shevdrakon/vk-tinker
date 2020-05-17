import React from 'react';
import {IconButton as MuiIconButton} from '@material-ui/core';

interface IIconButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  color?: 'inherit' | 'default' | 'primary' | 'secondary';
}

const IconButton = (props: IIconButtonProps) => {
  const {children, onClick, color = 'primary'} = props;

  const handleClick = (e) => {
    onClick && onClick(e);
  };

  return <MuiIconButton color={color} onClick={handleClick}>
    {children}
  </MuiIconButton>
};

export default IconButton;
