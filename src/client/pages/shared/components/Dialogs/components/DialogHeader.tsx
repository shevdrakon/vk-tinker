import React from 'react';

import IconButton from '../../../../../components/Buttons/IconButton';
import CloseIcon from '../../../../../components/Icons/CloseIcon';

import bemFactory from '../../../../../lib/bem-factory';
import styles from './DialogHeader.module.scss';

const {block, element} = bemFactory('dialog-header', styles);

interface IDialogHeaderProps {
  title: string;
  onClose: () => void;
}

const DialogHeader = (props: IDialogHeaderProps) => {
  const {title, onClose} = props;

  return <div className={block()}>
    <div className={element('title')}>
      {title}
    </div>
    <IconButton color="default" onClick={onClose}>
      <CloseIcon />
    </IconButton>
  </div>
};

export default DialogHeader;
