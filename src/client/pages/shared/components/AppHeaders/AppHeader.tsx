import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import AppHeaderContent from './AppHeaderContent/AppHeaderContent';
import HeaderMainContent from './AppHeaderContent/HeaderMainContent';
import HeaderSelectPhotosContent from './AppHeaderContent/HeaderSelectPhotosContent';
import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import {SELECTORS} from '../../../../store/photos/photosReducer';

import styles from './AppHeader.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import {PhotosActionsMode} from '../../../../store/photos/photos.types';

const {block} = bemFactory('app-header', styles);

const AppHeader = () => {
  const mode = useAppStateSelector(SELECTORS.getMode);
  const isEditMode = mode === PhotosActionsMode.edit;

  return <>
    <AppBar className={block()} elevation={4}>
      <AppHeaderContent show={!isEditMode}>
        <HeaderMainContent />
      </AppHeaderContent>

      <AppHeaderContent show={isEditMode}>
        <HeaderSelectPhotosContent />
      </AppHeaderContent>
    </AppBar>
  </>
};

export default AppHeader;
