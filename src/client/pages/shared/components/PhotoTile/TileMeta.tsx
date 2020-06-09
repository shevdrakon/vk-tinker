import React from 'react';

import IconButton from '../../../../components/Buttons/IconButton';
import {ThreeHorizontalDotsIcon, ShareIcon} from '../../../../components/Icons';

import styles from './TileMeta.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import LinkIconButton from '../../../../components/Buttons/LinkIconButton';
import {IDashboardPhoto} from '../../../../store/photos/photos.types';
import CommentsIcon from '../../../../components/Icons/CommentsIcon';

const {block, element} = bemFactory('tile-meta', styles);

interface ITileMetaProps {
  photo: IDashboardPhoto;
}

const TileMeta = (props: ITileMetaProps) => {
  const {photo: {owner_id, id, comments}} = props;
  const commentsCount = comments.length;
  const url = `https://vk.com/photo${owner_id}_${id}`;

  const handleClick = (e) => {
    e.stopPropagation();
  }

  return <div className={block()}>
    <div className={element('details')}>
      <div>
        <IconButton size="small" onClick={handleClick}>
          <ThreeHorizontalDotsIcon className={element('action-button')} />
        </IconButton>
      </div>
      <div className={element('container')}>
        {commentsCount > 0 && <>
          <CommentsIcon size={18} className={element('action-button')} />
          <span className={element('comments-count')}>{commentsCount}</span>
        </>}
        <LinkIconButton href={url} className={element('padding')} size="small" onClick={handleClick}>
          <ShareIcon className={element('action-button')} size={14} />
        </LinkIconButton>
      </div>
    </div>
  </div>
};

export default TileMeta;
