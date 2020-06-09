import React from 'react';
import {DatePicker as MuiDatePicker} from '@material-ui/pickers/DatePicker'

interface IDatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

const DatePicker = (props: IDatePickerProps) => {
  const {value, onChange} = props;

  return <MuiDatePicker value={value} onChange={onChange} />
};

export default DatePicker;
