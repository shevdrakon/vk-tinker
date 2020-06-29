import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import useBindActionCreators from '../../../../hooks/useBindActionCreators';
import {movePhotos} from '../../../../store/photosSelection/photosSelectionActions';

import AlbumSelectorOption from './AlbumSelectorOption';
import DialogHeader from './components/DialogHeader';
import DialogContent from './components/DialogContent';

import styles from './AlbumSelectorDialog.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import {SELECTORS} from '../../../../store/photosSelection/photosSelectionReducer';

const {block, element} = bemFactory('album-selector-dialog', styles);

interface IAlbumSelectorDialogProps {
  open: boolean;
  onClose: () => void;
}

const AlbumSelectorDialog = (props: IAlbumSelectorDialogProps) => {
  const {open, onClose} = props;
  const items = useAppStateSelector(x => x.albums.items);
  const actions = useBindActionCreators({movePhotos});
  const selectedPhotos = useAppStateSelector(SELECTORS.getSelected);

  const handleAlbumClick = (albumId: number) => {
    const payload = {targetAlbumId: albumId, photosIds: selectedPhotos};
    actions.movePhotos(payload);

    onClose();
  }

  return <Dialog open={open} onClose={onClose} className={block()}>
    <DialogHeader title="Move to" onClose={onClose} />
    <DialogContent>
      <ul className={element('list')}>
        {
          items.map(x => <AlbumSelectorOption key={x.id} album={x} onClick={handleAlbumClick} />)
        }
      </ul>
    </DialogContent>
  </Dialog>
};

export default AlbumSelectorDialog;
