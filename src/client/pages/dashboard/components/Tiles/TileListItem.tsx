import React from 'react';
import cn from 'classnames';

import Tile from './Tile';
import {CheckCircleIcon, CircleIcon} from '../../../../components/Icons';

import styles from './TileListItem.module.scss';
import bemFactory from '../../../../lib/bem-factory';

const {block, element} = bemFactory('tile-list-item', styles);

interface ITileListItemProps {
  url: string;
}

const TileListItem = (props: ITileListItemProps) => {
  const {url} = props;

  return <li className={block()}>
    <Tile url={url} />

    <div className={cn(element('actions'))}>
      <CheckCircleIcon className={element('icon')} />
      <CircleIcon className={element('icon')} />
    </div>
  </li>
};

export default TileListItem;
