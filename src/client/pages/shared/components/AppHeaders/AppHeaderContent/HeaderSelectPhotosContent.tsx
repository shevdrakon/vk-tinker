import React from 'react';

import useAppStateSelector from '../../../../../hooks/useAppStateSelector';
import useBindActionCreators from '../../../../../hooks/useBindActionCreators';
import {SELECTORS} from '../../../../../store/photosSelection/photosSelectionReducer';
import {clearPhotoSelection, movePhotos} from '../../../../../store/photosSelection/photosSelectionActions';

import IconButton from '../../../../../components/Buttons/IconButton';
import {AddIcon, MoreVerticalIcon, BasketIcon} from '../../../../../components/Icons';
import AlbumSelectorDialog from '../../Dialogs/AlbumSelectorDialog';
import PhotoDeleteConfirmationDialog from '../../Dialogs/PhotoDeleteConfirmationDialog';

import styles from './HeaderSelectPhotosContent.module.scss';
import bemFactory from '../../../../../lib/bem-factory';
import CloseIcon from '../../../../../components/Icons/CloseIcon';

const {block, element} = bemFactory('header-select-photos-content', styles);

const HeaderSelectPhotosContent = () => {
  const [openSelectAlbumDialog, setOpenSelectAlbumDialog] = React.useState(false);
  const [openRemovePhotosDialog, setOpenRemovePhotosDialog] = React.useState(false);

  const actions = useBindActionCreators({clearPhotoSelection, movePhotos});
  const selectedPhotos = useAppStateSelector(SELECTORS.getSelected);
  const selectedCount = selectedPhotos.length;

  const handleCloseClick = () => {
    actions.clearPhotoSelection();
  }

  const handleAddIconClick = () => {
    setOpenSelectAlbumDialog(true);
  }

  const handleRemoveIconClick = () => {
    setOpenRemovePhotosDialog(true);
  }

  const handleCloseSelectAlbumDialog = () => {
    setOpenSelectAlbumDialog(false);
  }

  const handleCloseRemovePhotosDialog = () => {
    setOpenRemovePhotosDialog(false);
  }

  return <div className={block()}>
    <div className={element('container')}>
      <IconButton color="inherit" onClick={handleCloseClick}>
        <CloseIcon />
      </IconButton>
      <span className={element('title')}>
        {selectedCount} selected
    </span>
    </div>

    <div className={element('container')}>
      <IconButton color="inherit" onClick={handleAddIconClick}>
        <AddIcon />
      </IconButton>
      <IconButton color="inherit" onClick={handleRemoveIconClick}>
        <BasketIcon />
      </IconButton>
      <IconButton color="inherit">
        <MoreVerticalIcon />
      </IconButton>
    </div>

    <AlbumSelectorDialog open={openSelectAlbumDialog} onClose={handleCloseSelectAlbumDialog} />
    <PhotoDeleteConfirmationDialog open={openRemovePhotosDialog} onClose={handleCloseRemovePhotosDialog} />
  </div>
};

export default HeaderSelectPhotosContent;
