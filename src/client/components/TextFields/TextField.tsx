import React from 'react';

import MuiTextField from '@material-ui/core/TextField';

interface ITExtFieldProps {
  label?: React.ReactNode;
  endAdornment?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
}

const TextField = (props: ITExtFieldProps) => {
  const {
    label, value, defaultValue,
    error,
    endAdornment,
    onChange,
    className,
  } = props;

  const handleChange = (e) => {
    onChange && onChange(e.target.value);
  }

  const helperText = error || <span style={{display: 'block', height: '19px'}} />;

  return <MuiTextField
    fullWidth
    label={label}
    defaultValue={defaultValue}
    value={value}
    error={!!error}
    helperText={helperText}
    className={className}
    InputLabelProps={{
      shrink: true,
    }}
    InputProps={{
      endAdornment,
    }}
    onChange={handleChange}
  />
};

export default TextField;
