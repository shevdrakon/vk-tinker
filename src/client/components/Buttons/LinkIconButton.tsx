import React from 'react';
import {IconButton as MuiIconButton} from '@material-ui/core';

interface ILinkIconButtonProps {
  href: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  color?: 'inherit' | 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium';
  className?: string;
}

const LinkIconButton = (props: ILinkIconButtonProps) => {
  const {href, children, onClick, color = 'primary', className, size} = props;
  const target = href && href.length && '_blank';

  const handleClick = (e) => {
    onClick && onClick(e);
  };

  return <MuiIconButton href={href}
                        target={target}
                        size={size}
                        className={className}
                        color={color}
                        onClick={handleClick}>
    {children}
  </MuiIconButton>
};

export default LinkIconButton;
