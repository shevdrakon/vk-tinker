import React from 'react';
import cn from 'classnames';

import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import useBindActionCreators from '../../../../hooks/useBindActionCreators';
import {togglePhotoSelect} from '../../../../store/photosSelection/photosSelectionActions';
import {SELECTORS} from '../../../../store/photosSelection/photosSelectionReducer';

import Tile from './Tile';
import TileActions from './TileActions';

import {IDashboardPhoto} from '../../../../store/photos/photos.types';

import styles from './TileListItem.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import {PhotosActionsMode} from '../../../../store/photosSelection/photosSelection.types';

const {block, element, modifier} = bemFactory('tile-list-item', styles);

interface ITileListItemProps {
  photo: IDashboardPhoto;
}

const TileListItem = (props: ITileListItemProps) => {
  const {photo} = props;
  const selected = useAppStateSelector(SELECTORS.isSelected(photo.id));
  const mode = useAppStateSelector(SELECTORS.getMode);
  const actions = useBindActionCreators({togglePhotoSelect});

  const handleItemClick = React.useCallback((e) => {
    e.stopPropagation();

    if (mode === PhotosActionsMode.view) return;

    actions.togglePhotoSelect(photo.id);
  }, [mode, photo.id]);

  const tileClasses = cn(element('tile'),
    {[element('tile', 'selected')]: selected}
  );

  const classes = cn(block(),
    modifier(mode),
    {[modifier('selected')]: selected}
  );

  return <li className={classes} onClick={handleItemClick}>
    <div className={tileClasses}>
      <Tile photo={photo} />
    </div>
    <TileActions photo={photo} />
  </li>
};

export default TileListItem;
