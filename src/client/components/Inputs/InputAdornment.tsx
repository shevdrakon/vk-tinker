import React from 'react';
import MuiInputAdornment from '@material-ui/core/InputAdornment';

interface IInputAdornment {
  position: 'start' | 'end';
  children?: React.ReactNode;
}

const InputAdornment = (props: IInputAdornment) => {
  const {position, children} = props;

  return <MuiInputAdornment position={position}>
    {children}
  </MuiInputAdornment>
};

export default InputAdornment;
