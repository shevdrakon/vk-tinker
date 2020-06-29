import React from 'react';
import cn from 'classnames';

import TilePhoto from './TilePhoto';
import TileInfo from './TileInfo';
import TileMeta from './TileMeta';
import {IDashboardPhoto} from '../../../../store/photos/photos.types';

import bemFactory from '../../../../lib/bem-factory';
import styles from './Tile.module.scss';

const {block} = bemFactory('tile', styles);

interface ITileProps {
  photo: IDashboardPhoto;
}

const Tile = (props: ITileProps) => {
  const {photo} = props;

  return <div className={block()}>
    <TilePhoto photo={photo} />
    <TileInfo photo={photo} />
    <TileMeta photo={photo} />
  </div>
};

export default React.memo(Tile);
