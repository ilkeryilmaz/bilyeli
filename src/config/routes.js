import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import Home from 'containers/Home';
import List from 'containers/List';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  DETAIL: `${ publicPath }list`,
};

export default () => (
  <Switch>
    <Route exact path={ routeCodes.HOME } component={ Home } />
    <Route path={ routeCodes.DETAIL } component={ List } />
    <Route path='*' component={ Home } />
  </Switch>
);
