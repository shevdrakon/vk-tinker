import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import styles from './AlbumSelectorDialog.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import IconButton from '../../../../components/Buttons/IconButton';
import CloseIcon from '../../../../components/Icons/CloseIcon';
import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import AlbumSelectorOption from './AlbumSelectorOption';

const {block, element} = bemFactory('album-selector-dialog', styles);

interface IAlbumSelectorDialogProps {
  title: string;
  open: boolean;
  onClose: () => void;
  onSelect: (albumId: number) => void;
}

const AlbumSelectorDialog = (props: IAlbumSelectorDialogProps) => {
  const {title, open, onClose, onSelect} = props;
  const items = useAppStateSelector(x => x.albums.items);

  const handleAlbumClick = (albumId: number) => {
    onSelect(albumId);
    onClose();
  };

  return <Dialog open={open} onClose={onClose} className={block()}>
    <div className={element('title')}>
      <div className={element('title-text')}>
        {title}
      </div>
      <IconButton color="default" onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </div>
    <div className={element('content')}>
      <ul className={element('list')}>
        {
          items.map(x => <AlbumSelectorOption key={x.id} album={x} onClick={handleAlbumClick} />)
        }
      </ul>
    </div>
  </Dialog>
};

export default AlbumSelectorDialog;
