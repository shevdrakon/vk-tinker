import React from 'react';

import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import {SELECTORS} from '../../../../store/users/usersReducer';
import Avatar from '../../../../components/Avatars/Avatar';

import styles from './TileInfo.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import {IAlbum} from '../../../../../server/vk/vk-api/photos/photos.types';

const {block, element} = bemFactory('tile-info', styles);

interface ITileInfoProps {
  album: IAlbum;
}

const dateToString = (date: number) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'short', day: 'numeric',
  };
  return new Date(date * 1000).toLocaleString('ru', options);
}

const TileInfo = (props: ITileInfoProps) => {
  const {album: {size, title, updated}} = props;
  const updatedString = dateToString(updated);

  return <div className={block()}>
    <div className={element('title')}>
      {title}
    </div>
    <div className={element('size')}>
      {size} items · {updatedString}
    </div>
  </div>
};

export default TileInfo;
