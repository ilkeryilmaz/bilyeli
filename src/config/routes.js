import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import Home from 'containers/Home';
import Subpage from 'containers/Subpage';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  DETAIL: `${ publicPath }subpage`,
};

export default () => (
  <Switch>
    <Route exact path={ routeCodes.HOME } component={ Home } />
    <Route path={ routeCodes.DETAIL } component={ Subpage } />
    <Route path='*' component={ Home } />
  </Switch>
);
