import React, {MouseEventHandler} from 'react';
import cn from 'classnames';

import styles from './ActionIcon.module.scss';
import bemFactory from '../../../../lib/bem-factory';

const {block, modifier} = bemFactory('action-icon', styles);

interface IActionIconProps {
  component: any;
  onClick?: MouseEventHandler;
  active?: boolean;
}

const ActionIcon = (props: IActionIconProps) => {
  const {component: Component, active, onClick, ...rest} = props;
  const classes = cn(block(), {
    [modifier('active')]: active,
  });

  return <Component className={classes} onClick={onClick} {...rest} />
};

export default ActionIcon;
