import React from 'react';
import {Button as MuiButton} from '@material-ui/core';

interface IButtonProps {
  children: React.ReactNode | React.ReactNodeArray;
  variant?: 'text' | 'outlined' | 'contained';
  className?: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'default';
}

const Button = (props: IButtonProps) => {
  const {children, variant = 'contained', className, onClick, color = 'primary'} = props;

  const handleButtonClick = () => {
    onClick && onClick();
  };

  return <MuiButton className={className} variant={variant} color={color} onClick={handleButtonClick}>
    {children}
  </MuiButton>
};

export default Button;
