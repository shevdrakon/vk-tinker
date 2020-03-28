import React from 'react';

import styles from './Bob.module.scss';
import bemFactory from '../../lib/bem-factory';
import cn from 'classnames';

const {block, element} = bemFactory('bob', styles);

interface IBobProps {
  className?: string;
}

const Bob = (props: IBobProps) => {
  const {className} = props;

  return <div className={cn(block(), className)}>
    <div className={element('nose')} />
    <div className={element('face')}>
      <div className={element('mouth')}>
        <div className={element('tongue')} />
      </div>
    </div>
    <div className={cn(element('ear'), element('ear', 'left'))} />
    <div className={cn(element('ear'), element('ear', 'right'))} />
    <div className={element('neck')} />
  </div>
};

export default Bob;
