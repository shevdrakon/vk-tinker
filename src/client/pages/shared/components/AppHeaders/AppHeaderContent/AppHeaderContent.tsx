import React from 'react';
import cn from 'classnames';

import Toolbar from '@material-ui/core/Toolbar';

import styles from './AppHeaderContent.module.scss';
import bemFactory from '../../../../../lib/bem-factory';

const {block, modifier} = bemFactory('app-header-content', styles);

interface IAppHeaderContentProps {
  show: boolean;
  children: React.ReactNode;
}

const AppHeaderContent = (props: IAppHeaderContentProps) => {
  const classes = cn(block(), {
    [modifier('show')]: props.show,
  });

  return <div className={classes}>
    {props.children}
  </div>
};

export default AppHeaderContent;
