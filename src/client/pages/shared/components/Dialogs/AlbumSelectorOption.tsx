import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';

import {IAlbum} from '../../../../../server/vk/vk-api/photos/photos.types';
import styles from './AlbumSelectorOption.module.scss';
import bemFactory from '../../../../lib/bem-factory';

const {block, element} = bemFactory('album-selector-option', styles);

interface IAlbumSelectorOptionProps {
  album: IAlbum;
  onClick: (albumId: number) => void;
}

const dateToString = (date: number) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'short', day: 'numeric',
  };

  return new Date(date * 1000).toLocaleString('ru', options);
};

const AlbumSelectorOption = (props: IAlbumSelectorOptionProps) => {
  const {album: {sizes, size, title, updated}, onClick} = props;
  const url = sizes['s']?.src;

  const handleAlbumClick = () => {
    onClick(props.album.id);
  }

  return <ButtonBase component="div" className={block()} onClick={handleAlbumClick}>
    <div className={element('album-image')}>
      <img alt="" src={url} className={element('image')} />
    </div>
    <div className={element('album-description')}>
      <div className={element('album-title')}>
        {title}
      </div>
      <div className={element('album-updated-date')}>
        {dateToString(updated)} · {size} items
      </div>
    </div>
  </ButtonBase>
};

export default AlbumSelectorOption;
