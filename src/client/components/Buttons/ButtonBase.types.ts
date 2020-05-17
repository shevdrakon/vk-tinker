import React from 'react';

export interface IButtonBaseProps {
  children: React.ReactNode | React.ReactNodeArray;
  color?: 'primary' | 'secondary' | 'default' | 'inherit';
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
