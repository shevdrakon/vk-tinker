import React from 'react';

import Tile from './Tile';

import styles from './TileListItem.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import {IAlbum} from '../../../../../server/vk/vk-api/photos/photos.types';

const {block} = bemFactory('tile-list-item', styles);

interface ITileListItemProps {
  album: IAlbum;
}

const TileListItem = (props: ITileListItemProps) => {
  const {album} = props;

  return <li className={block()}>
    <Tile album={album} />
  </li>
};

export default TileListItem;
