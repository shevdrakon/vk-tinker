import React from 'react';

import styles from './Separator.module.scss';
import bemFactory from '../../lib/bem-factory';

const {block} = bemFactory('separator', styles);

interface ISeparatorProps {
  value: string;
}

const Separator = (props: ISeparatorProps) => {
  const {value} = props;

  return <hr className={block()} data-content={value} />
};

export default Separator;
