import React from 'react';
import cn from 'classnames';

import TilePhoto from './TilePhoto';
import TileInfo from './TileInfo';
import TileMeta from './TileMeta';

import bemFactory from '../../../../lib/bem-factory';
import styles from './Tile.module.scss';

const {block, element} = bemFactory('tile', styles);

interface ITileProps {
  url: string;
  className?: string;
}

const Tile = (props: ITileProps) => {
  const {url, className} = props;

  return <div className={cn(block(), className)}>
    <TilePhoto url={url} />
    <TileInfo />
    <TileMeta />
  </div>
};

export default Tile;
