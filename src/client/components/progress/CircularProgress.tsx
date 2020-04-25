import React from 'react';
import MuiCircularProgress from '@material-ui/core/CircularProgress';

interface ICircularProgress {
  size?: number;
}

const CircularProgress = (props: ICircularProgress) => {
  const {size = 24} = props;
  
  return <MuiCircularProgress size={size} />
};

export default CircularProgress;
