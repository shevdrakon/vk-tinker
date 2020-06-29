import React from 'react';
import cn from 'classnames';

import useBindActionCreators from '../../../../hooks/useBindActionCreators';
import {togglePhotoSelect} from '../../../../store/photosSelection/photosSelectionActions';
import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import {SELECTORS} from '../../../../store/photosSelection/photosSelectionReducer';

import ActionIcon from '../ActionIcons/ActionIcon';
import {CheckCircleIcon, CircleIcon} from '../../../../components/Icons';
import {PhotosActionsMode} from '../../../../store/photosSelection/photosSelection.types';
import {IDashboardPhoto} from '../../../../store/photos/photos.types';

import bemFactory from '../../../../lib/bem-factory';
import styles from './TileActions.module.scss';

const {block, modifier} = bemFactory('tile-actions', styles);

interface ITileActionsProps {
  photo: IDashboardPhoto;
}

const TileActions = (props: ITileActionsProps) => {
  const actions = useBindActionCreators({togglePhotoSelect});
  const {photo} = props;

  const selected = useAppStateSelector(SELECTORS.isSelected(photo.id));
  const mode = useAppStateSelector(SELECTORS.getMode);
  const isEditMode = mode === PhotosActionsMode.edit;

  const showCheckIcon = !isEditMode || selected;
  const showCircleIcon = isEditMode && !selected;

  const classes = cn(block(), {
    [modifier('edit')]: isEditMode,
  });

  const handleSelect = (e) => {
    e.stopPropagation();

    actions.togglePhotoSelect(photo.id);
  }

  return <div className={classes} data-role="actions">
    {showCheckIcon && <ActionIcon component={CheckCircleIcon} onClick={handleSelect} active={selected} />}
    {showCircleIcon && <ActionIcon component={CircleIcon} />}
  </div>
};

export default TileActions;
