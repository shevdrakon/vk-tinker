import React from 'react';

import MuiMenuList from '@material-ui/core/MenuList';

interface ISelectorOptionsListProps {
  children?: React.ReactNode;
}

const SelectorOptionsList = (props: ISelectorOptionsListProps) => {
  return <MuiMenuList autoFocus>
    {props.children}
  </MuiMenuList>
};

export default SelectorOptionsList;
