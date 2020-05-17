import React from 'react';
import MuiButton from '@material-ui/core/Button';
import {IButtonBaseProps} from './ButtonBase.types';

interface ILinkButtonProps extends IButtonBaseProps {
  href?: string;
}

const LinkButton = (props: ILinkButtonProps) => {
  const {
    color = 'primary',
    variant = 'contained',
    disabled = false,
    children, className,
    onClick,
    href,
  } = props;

  const handleButtonClick = (e) => {
    onClick && onClick(e);
  };

  const target = href && href.length && '_blank';

  return <MuiButton disabled={disabled}
                    className={className}
                    href={href}
                    target={target}
                    variant={variant}
                    color={color}
                    onClick={handleButtonClick}>
    {children}
  </MuiButton>
};

export default LinkButton;
