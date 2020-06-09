import React from 'react';
import {NavLink} from 'react-router-dom';

import TilePhoto from './TilePhoto';
import TileInfo from './TileInfo';
import {IAlbum} from '../../../../../server/vk/vk-api/photos/photos.types';

import bemFactory from '../../../../lib/bem-factory';
import styles from './Tile.module.scss';

const {block} = bemFactory('tile', styles);

interface ITileProps {
  album: IAlbum;
}

const Tile = (props: ITileProps) => {
  const {album} = props;
  const url = (album.sizes['p'] || album.sizes['x']).src;
  const navigateToUrl = `/albums/${album.id}/photos`

  return <NavLink to={navigateToUrl} className={block()}>
    <TilePhoto url={url} />
    <TileInfo album={album} />
  </NavLink>
};

export default Tile;
