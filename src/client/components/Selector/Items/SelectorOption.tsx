import React from 'react';

import MuiMenuItem from '@material-ui/core/MenuItem';

interface ISelectorOptionProps {
  children?: React.ReactNode;
}

const SelectorOption = (props: ISelectorOptionProps) => {
  return <MuiMenuItem>
    {props.children}
  </MuiMenuItem>
};

export default SelectorOption;
