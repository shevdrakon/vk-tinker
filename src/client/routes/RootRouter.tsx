import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';

import LoginPage from '../pages/login-page/LoginPage';
import Page404 from '../pages/404/Page404';

const RootRouter = () => {
  return <Router>
    <Switch>
      <Route exact path="/">
        Home!
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </Router>
};

export default RootRouter;
