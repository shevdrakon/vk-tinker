import React from 'react';
import MuiButton from '@material-ui/core/Button';

import {IButtonBaseProps} from './ButtonBase.types';

interface IButtonProps extends IButtonBaseProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  classes?: {
    endIcon?: string;
  };
}

const Button = (props: IButtonProps) => {
  const {
    color = 'primary',
    variant = 'contained',
    disabled = false,
    children, className,
    startIcon, endIcon,
    onClick,
    classes,
  } = props;

  const handleButtonClick = (e) => {
    onClick && onClick(e);
  };

  return <MuiButton disabled={disabled}
                    className={className}
                    variant={variant}
                    color={color}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    classes={classes}
                    onClick={handleButtonClick}>
    {children}
  </MuiButton>
};

export default Button;
