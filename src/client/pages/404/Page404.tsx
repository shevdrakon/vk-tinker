import React from 'react';

import Bob from './Bob';

import cn from 'classnames';
import styles from './Page404.module.scss';
import bemFactory from '../../lib/bem-factory';

const {block, element} = bemFactory('page-404', styles);

const Page404 = () => {
  return <div className={block()}>
    <div className={element('container')}>
      <div className={element('scale-container')}>
        <span className={element('number')}>4</span>
        <div className={element('circle')}>
          <div className={cn(element('drops'), element('drops', 'left'))} />
          <div className={cn(element('drops'), element('drops', 'right'))} />
          <div className={cn(element('hand'), element('hand', 'left'))} />
          <div className={cn(element('hand'), element('hand', 'right'))} />
          <div className={element('holder')}>
            <Bob className={element('bob')} />
          </div>
        </div>
        <span className={element('number')}>4</span>
      </div>
    </div>
  </div>
};

export default Page404;
