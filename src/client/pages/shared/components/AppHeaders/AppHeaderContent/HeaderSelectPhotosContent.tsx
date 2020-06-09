import React from 'react';

import useAppStateSelector from '../../../../../hooks/useAppStateSelector';
import {SELECTORS} from '../../../../../store/photos/photosReducer';
import useBindActionCreators from '../../../../../hooks/useBindActionCreators';
import {clearPhotoSelection, movePhotos} from '../../../../../store/photos/photosActions';

import IconButton from '../../../../../components/Buttons/IconButton';
import {AddIcon, MoreVerticalIcon, BasketIcon} from '../../../../../components/Icons';
import AlbumSelectorDialog from '../../Dialogs/AlbumSelectorDialog';

import styles from './HeaderSelectPhotosContent.module.scss';
import bemFactory from '../../../../../lib/bem-factory';
import CloseIcon from '../../../../../components/Icons/CloseIcon';

const {block, element} = bemFactory('header-select-photos-content', styles);

const HeaderSelectPhotosContent = () => {
  const [openSelectAlbumDialog, setOpenSelectAlbumDialog] = React.useState(false);
  const actions = useBindActionCreators({clearPhotoSelection, movePhotos});
  const selectedPhotos = useAppStateSelector(SELECTORS.getSelected);
  const selectedCount = selectedPhotos.length;

  const handleCloseClick = () => {
    actions.clearPhotoSelection();
  }

  const handleAddIconClick = () => {
    setOpenSelectAlbumDialog(true);
  }

  const handleCloseSelectAlbumDialog = () => {
    setOpenSelectAlbumDialog(false);
  }

  const handleAlbumSelect = (albumId: number) => {
    const payload = {
      targetAlbumId: albumId,
      photosIds: selectedPhotos,
    };

    actions.movePhotos(payload);
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
      <IconButton color="inherit">
        <BasketIcon />
      </IconButton>
      <IconButton color="inherit">
        <MoreVerticalIcon />
      </IconButton>
    </div>

    <AlbumSelectorDialog open={openSelectAlbumDialog}
                         onClose={handleCloseSelectAlbumDialog}
                         onSelect={handleAlbumSelect}
                         title="Move to" />
  </div>
};

export default HeaderSelectPhotosContent;
