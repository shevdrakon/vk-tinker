import React from 'react';

import styles from '../TileInfo.module.scss';
import bemFactory from '../../../../../lib/bem-factory';
import Skeleton from '@material-ui/lab/Skeleton';

const {block, element} = bemFactory('tile-info', styles);

const TileInfoGhost = () => {
  return <div className={block()}>
    <div className={element('source-wrapper')}>
      <Skeleton variant="circle" width={40} height={40} />
    </div>
    <h3 className={element('title')}>
      <Skeleton variant="text" />
      <Skeleton variant="text" width="60%" />
    </h3>
  </div>
};

export default TileInfoGhost;
