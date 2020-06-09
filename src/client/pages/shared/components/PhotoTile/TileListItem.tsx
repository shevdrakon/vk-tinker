import React from 'react';
import cn from 'classnames';
import useBindActionCreators from '../../../../hooks/useBindActionCreators';
import {togglePhotoSelect} from '../../../../store/photos/photosActions';

import Tile from './Tile';
import {CheckCircleIcon, CircleIcon} from '../../../../components/Icons';
import {IDashboardPhoto, PhotosActionsMode} from '../../../../store/photos/photos.types';

import styles from './TileListItem.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import {SELECTORS} from '../../../../store/photos/photosReducer';
import ActionIcon from '../ActionIcons/ActionIcon';

const {block, element, modifier} = bemFactory('tile-list-item', styles);

interface ITileListItemProps {
  photo: IDashboardPhoto;
}

const TileListItem = (props: ITileListItemProps) => {
  const actions = useBindActionCreators({togglePhotoSelect});
  const {photo} = props;

  const selected = useAppStateSelector(SELECTORS.isSelected(photo.id));
  const mode = useAppStateSelector(SELECTORS.getMode);
  const isEditMode = mode === PhotosActionsMode.edit;

  const showCheckIcon = !isEditMode || selected;
  const showCircleIcon = isEditMode && !selected;

  const handleSelectIconClick = (e) => {
    e.stopPropagation();

    actions.togglePhotoSelect(photo.id);
  }

  const handleItemClick = (e) => {
    e.stopPropagation();

    if (!isEditMode) return;

    actions.togglePhotoSelect(photo.id);
  }

  const tileClasses = cn({
    [element('tile', 'selected')]: selected,
  });

  const classes = cn(block(), modifier(mode), {[modifier('selected')]: selected});

  return <li className={classes} onClick={handleItemClick}>
    <Tile photo={photo} className={tileClasses} />

    <div className={element('actions')}>
      {showCheckIcon && <ActionIcon component={CheckCircleIcon} onClick={handleSelectIconClick} active={selected} />}
      {showCircleIcon && <ActionIcon component={CircleIcon} />}
    </div>
  </li>
};

export default TileListItem;
