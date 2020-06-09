import React from 'react';
import cn from 'classnames';

import Tile from './Tile/Tile';
import ActionIcon from '../../../shared/components/ActionIcons/ActionIcon';
import {CheckCircleIcon, CircleIcon} from '../../../../components/Icons';

import {IPhoto} from '../../../../../server/vk/vk-api/photos/photos.types';
import bemFactory from '../../../../lib/bem-factory';
import styles from './PhotoListItem.module.scss';

const {block, element} = bemFactory('photo-list-item', styles);

interface IPhotoListItemProps {
  photo: IPhoto;
}

const PhotoListItem = (props: IPhotoListItemProps) => {
  const [selected, setSelected] = React.useState(false);
  const {photo} = props;

  const handleClick = () => {
    setSelected(!selected);
  }

  const tileClasses = cn({
    [element('tile', 'selected')]: selected,
  })

  return <li className={block()} onClick={handleClick}>
    <Tile photo={photo} className={tileClasses} />
    <div className={element('actions')}>
      {!selected && <ActionIcon component={CircleIcon} />}
      {selected && <ActionIcon component={CheckCircleIcon} active />}
    </div>
  </li>
};

export default PhotoListItem;
