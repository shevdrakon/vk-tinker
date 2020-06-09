import React from 'react';

import bemFactory from '../../../../lib/bem-factory';
import styles from './TilePhoto.module.scss';

const {block, element} = bemFactory('tile-photo', styles);

interface ITilePhotoProps {
  url: string;
}

const TilePhoto = (props: ITilePhotoProps) => {
  const {url} = props;

  return <div className={block()}>
    <img alt="" className={element('image')} src={url} />
  </div>
};

export default TilePhoto;
