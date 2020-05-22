import React from 'react';

import styles from './ToggleIconButton.module.scss';
import bemFactory from '../../lib/bem-factory';

const {block} = bemFactory('toggle-icon-button', styles);

interface IToggleIconButtonProps {
  selected: boolean;
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
  className?: string;
}

const ToggleIconButton = (props: IToggleIconButtonProps) => {
  const {onIcon, offIcon, selected} = props;

  return <div className={block()}>
    {selected && onIcon}
    {!selected && offIcon}
  </div>
};

export default ToggleIconButton;
