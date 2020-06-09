import React from 'react';

import TilePhotoGhost from './TilePhoto.Ghost';
import TileInfoGhost from './TileInfo.Ghost';

import bemFactory from '../../../../../lib/bem-factory';
import styles from '../Tile.module.scss';

const {block} = bemFactory('tile', styles);

const TileGhost = () => {
  return <div className={block()}>
    <TilePhotoGhost />
    <TileInfoGhost />
  </div>
};

export default TileGhost;
