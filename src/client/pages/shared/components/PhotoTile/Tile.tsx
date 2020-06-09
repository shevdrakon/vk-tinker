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
  className?: string;
}

const Tile = (props: ITileProps) => {
  const {photo, className} = props;
  const classes = cn(block(), className);

  return <div className={classes}>
    <TilePhoto photo={photo} />
    <TileInfo photo={photo} />
    <TileMeta photo={photo} />
  </div>
};

export default Tile;
