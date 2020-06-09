import React from 'react';
import cn from 'classnames';

import {IPhoto} from '../../../../../../server/vk/vk-api/photos/photos.types';

import bemFactory from '../../../../../lib/bem-factory';
import styles from './Tile.module.scss';
import ShareIcon from '../../../../../components/Icons/ShareIcon';
import ActionIcon from '../../../../shared/components/ActionIcons/ActionIcon';
import LinkIconButton from '../../../../../components/Buttons/LinkIconButton';

const {block, element} = bemFactory('tile', styles);

interface ITilePhoto {
  photo: IPhoto;
  className?: string;
}

const Tile = (props: ITilePhoto) => {
  const {photo, className} = props;
  const imageUrl = photo.sizes['q'].url;
  const classes = cn(block(), className);
  const url = `https://vk.com/photo${photo.owner_id}_${photo.id}`;

  const handleNavigateClick = (e) => {
    e.stopPropagation();
  }

  return <div className={classes}>
    <img alt="" className={element('image')} src={imageUrl} />
    <div className={element('shadow')} />
    <div className={element('shadow-up')} />
    <div className={element('actions')}>
      <LinkIconButton href={url} size="small" onClick={handleNavigateClick}>
        <ActionIcon component={ShareIcon} size={18} />
      </LinkIconButton>
    </div>
  </div>
};

export default Tile;
