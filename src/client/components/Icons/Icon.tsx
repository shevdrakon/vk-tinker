import React from 'react';

interface IIconProps {
  className?: string;
  viewBox: string;
  children: React.ReactNode | React.ReactNodeArray;
  size?: number;
}

const Icon = (props: IIconProps) => {
  const {viewBox, children, size = 24, ...rest} = props;

  return (
    <svg style={{height: size}} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" {...rest}>
      {children}
    </svg>
  )
};

export default Icon;
