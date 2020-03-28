import React from 'react';

import MuiTextField from '@material-ui/core/TextField';

interface ITExtFieldProps {
  label?: React.ReactNode;
  endAdornment?: React.ReactNode;
  value?: string;
  defaultValue?: string;
}

const TextField = (props: ITExtFieldProps) => {
  const {label, value, defaultValue, endAdornment} = props;

  return <MuiTextField
    fullWidth
    label={label}
    InputLabelProps={{
      shrink: true,
    }}
    InputProps={{
      endAdornment,
    }}
    defaultValue={defaultValue}
    value={value}
  />
};

export default TextField;
