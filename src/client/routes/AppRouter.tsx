import React from 'react';
import {Route, Switch,} from 'react-router-dom';

import DashboardPage from '../pages/dashboard/DashboardPage';
import AlbumsPage from '../pages/albums/AlbumsPage';
import AlbumPhotoPage from '../pages/albumPhotos/AlbumPhotoPage';
import SideMenu from '../pages/shared/components/SideMenu/SideMenu';
import SpamPage from '../pages/spam/SpamPage';
import AppHeader from '../pages/shared/components/AppHeaders/AppHeader';

import routes from './routes'

const AppRouter = () => {
  return <>
    <AppHeader />
    <SideMenu />

    <Switch>
      <Route exact path={routes.dashboard}>
        <DashboardPage />
      </Route>
      <Route exact path={routes.albumPhotos}>
        <AlbumPhotoPage />
      </Route>
      <Route exact path={routes.albums}>
        <AlbumsPage />
      </Route>
      <Route exact path={routes.spam}>
        <SpamPage />
      </Route>
    </Switch>
  </>
};

export default AppRouter;
