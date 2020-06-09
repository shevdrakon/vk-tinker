import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';

import LoginPage from '../pages/login-page/LoginPage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import AlbumsPage from '../pages/albums/AlbumsPage';
import AlbumPhotoPage from '../pages/albumPhotos/AlbumPhotoPage';
import Page404 from '../pages/404/Page404';
import SideMenu from '../pages/shared/components/SideMenu/SideMenu';
import routes from './routes'
import SpamPage from '../pages/spam/SpamPage';

const RootRouter = () => {
  return <Router>
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
      <Route exact path={routes.login}>
        <LoginPage />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </Router>
};

export default RootRouter;
