import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import AppHeaderContent from '../../../shared/components/AppHeaders/AppHeaderContent/AppHeaderContent';
import HeaderMainContent from '../../../shared/components/AppHeaders/AppHeaderContent/HeaderMainContent';

import styles from './AppHeader.module.scss';
import bemFactory from '../../../../lib/bem-factory';

const {block} = bemFactory('app-header', styles);

const AppHeader = () => {
  return <>
    <AppBar className={block()} elevation={4}>
      <AppHeaderContent show>
        <HeaderMainContent />
      </AppHeaderContent>
    </AppBar>
  </>
};

export default AppHeader;
