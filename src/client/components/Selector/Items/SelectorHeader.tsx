import React from 'react';

import styles from './SelectorHeader.module.scss';
import bemFactory from '../../../lib/bem-factory';

const {block} = bemFactory('selector-header', styles);

interface ISelectorHeaderProps {
  children: React.ReactNode;
}

const SelectorHeader = (props: ISelectorHeaderProps) => {
  return <div className={block()}>
    {props.children}
  </div>
};

export default SelectorHeader;
