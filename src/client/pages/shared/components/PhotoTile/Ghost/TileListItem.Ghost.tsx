import React from 'react';

import TileGhost from './Tile.Ghost';

import styles from '../TileListItem.module.scss';
import bemFactory from '../../../../../lib/bem-factory';

const {block} = bemFactory('tile-list-item', styles);

const TileListItemGhost = () => {
  return <li className={block()}>
    <TileGhost />
  </li>
};

export default TileListItemGhost;
