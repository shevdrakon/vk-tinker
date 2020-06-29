import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';

import AppRouter from './AppRouter';
import LoginPage from '../pages/login-page/LoginPage';
import Page404 from '../pages/404/Page404';

import routes from './routes'

const RootRouter = () => {
  const appRoutes = [
    routes.dashboard,
    routes.albumPhotos,
    routes.albums,
    routes.spam,
  ];

  return <Router>
    <Switch>
      <Route exact path={routes.login}>
        <LoginPage />
      </Route>
      <Route exact path={appRoutes}>
        <AppRouter />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </Router>
};

export default RootRouter;
