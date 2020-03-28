import React from 'react';
import {IconButton as MuiIconButton} from '@material-ui/core';

interface IIconButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

const IconButton = (props: IIconButtonProps) => {
  const {children, onClick} = props;

  const handleClick = (e) => {
    onClick && onClick(e);
  };

  return <MuiIconButton color="primary" onClick={handleClick}>
    {children}
  </MuiIconButton>
};

export default IconButton;
