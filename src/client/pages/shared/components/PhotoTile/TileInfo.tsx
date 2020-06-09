import React from 'react';

import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import {SELECTORS} from '../../../../store/users/usersReducer';
import Avatar from '../../../../components/Avatars/Avatar';

import styles from './TileInfo.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import {IDashboardPhoto} from '../../../../store/photos/photos.types';

const {block, element} = bemFactory('tile-info', styles);

interface ITileInfoProps {
  photo: IDashboardPhoto;
}

const dateToString = (date: number) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    year: 'numeric', month: 'short', day: 'numeric',
  };

  return new Date(date * 1000).toLocaleString('ru', options);
};

const TileInfo = (props: ITileInfoProps) => {
  const {photo: {text, user_id, date, comments}} = props;
  const {photo_50} = useAppStateSelector(SELECTORS.getUserById(user_id));

  const showText = text || comments.find(x => x.text)?.text;
  const created = dateToString(date);

  return <div className={block()}>
    <div className={element('source-wrapper')}>
      <Avatar src={photo_50} />
      {/*<span className={element('source')} />*/}
    </div>
    <h3 className={element('title')}>
      {showText}
    </h3>
    <span className={element('created')}>
      {created}
    </span>
  </div>
};

export default TileInfo;
