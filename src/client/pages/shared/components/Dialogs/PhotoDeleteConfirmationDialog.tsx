import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import DialogHeader from './components/DialogHeader';
import DialogContent from './components/DialogContent';

import styles from './PhotoDeleteConfirmationDialog.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import Button from '../../../../components/Buttons/Button';
import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import {SELECTORS} from '../../../../store/photosSelection/photosSelectionReducer';

const {block, element} = bemFactory('photo-delete-confirmation-dialog', styles);

interface IPhotoDeleteConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
}

const PhotoDeleteConfirmationDialog = (props: IPhotoDeleteConfirmationDialogProps) => {
  const {open, onClose} = props;
  const selected = useAppStateSelector(SELECTORS.getSelected);
  const selectedCount = selected.length;

  return <Dialog open={open} onClose={onClose} className={block()}>
    <DialogHeader title="Remove photos" onClose={onClose} />
    <DialogContent>
      <div className={element('content')}>
        <p>Are you sure you would like to completely remove {selectedCount} items?</p>
      </div>
      <div className={element('actions')}>
        <Button variant="text">Cancel</Button>
        <Button variant="text">Remove</Button>
      </div>
    </DialogContent>
  </Dialog>
};

export default PhotoDeleteConfirmationDialog;
