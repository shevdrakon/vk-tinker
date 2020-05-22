import React from 'react';

import {
  SoldCircleIcon,
  ErrorCircleIcon,
  RulerCircleIcon,
  ShoppingCircleIcon,
  MonumentCircleIcon,
  PriceCircleIcon,
} from '../../../../components/Icons';

import cn from 'classnames';
import bemFactory from '../../../../lib/bem-factory';
import styles from './TilePhoto.module.scss';

const {block, element} = bemFactory('tile-photo', styles);

interface ITilePhoto {
  url: string;
}

const TilePhoto = (props: ITilePhoto) => {
  const {url} = props;

  return <div className={block()}>
    <img alt="" className={element('image')} src={url} />
    <div className={element('shadow')} data-role="shadow" />

    <div className={element('icons-container')}>
      <SoldCircleIcon size={35} />
      <div className={element('errors')}>
        <ErrorCircleIcon size={35} />
        <div className={cn(element('error-details-container'), element('error-details-container', 'color0'))}>
          <RulerCircleIcon className={element('error-item')} size={30} />
          <ShoppingCircleIcon className={element('error-item')} size={30} />
          <MonumentCircleIcon className={element('error-item')} size={30} />
          <PriceCircleIcon className={element('error-item')} size={30} />
          {/*<WrongAlbumIcon className={styles.errorItem} size={30} />*/}
        </div>
      </div>
    </div>
  </div>
};

export default TilePhoto;
