import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import styles from '../TileInfo.module.scss';
import bemFactory from '../../../../../lib/bem-factory';

const {block, element} = bemFactory('tile-info', styles);

const TileInfoGhost = () => {
  return <div className={block()}>
    <div className={element('title')}>
      <Skeleton variant="text" />
    </div>
    <div className={element('size')}>
      <Skeleton variant="text" width="30%" />
    </div>
  </div>
};

export default TileInfoGhost;
