import React from 'react';

import styles from './TileInfo.module.scss';
import bemFactory from '../../../../lib/bem-factory';

const {block, element} = bemFactory('tile-info', styles);

const TileInfo = () => {
  return <div className={block()}>
    <div className={element('source-wrapper')}>
      <span className={element('source')} />
    </div>
    <h3 className={element('title')}>
      Title here
    </h3>
  </div>
};

export default TileInfo;
