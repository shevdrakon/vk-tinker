import React from 'react';

import bemFactory from '../../../../../lib/bem-factory';
import styles from './DialogContent.module.scss';

const {block} = bemFactory('dialog-content', styles);

interface IDialogContentProps {
  children: React.ReactNode;
}

const DialogContent = (props: IDialogContentProps) => {
  return <div className={block()}>
    {props.children}
  </div>
};

export default DialogContent;
