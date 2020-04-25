import React from 'react';
import {Button as MuiButton} from '@material-ui/core';

interface IButtonProps {
  children: React.ReactNode | React.ReactNodeArray;
  color?: 'primary' | 'secondary' | 'default';
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  const {
    color = 'primary',
    variant = 'contained',
    disabled = false,
    children, className,
    startIcon, endIcon,
    onClick,
  } = props;

  const handleButtonClick = () => {
    onClick && onClick();
  };

  return <MuiButton disabled={disabled}
                    className={className}
                    variant={variant}
                    color={color}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    onClick={handleButtonClick}>
    {children}
  </MuiButton>
};

export default Button;
