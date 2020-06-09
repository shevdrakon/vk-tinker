import React from 'react';

import bemFactory from '../../../../../lib/bem-factory';
import styles from '../TilePhoto.module.scss';

const {block} = bemFactory('tile-photo', styles);

const TilePhotoGhost = () => {
  return <div className={block()}>
  </div>
};

export default TilePhotoGhost;
