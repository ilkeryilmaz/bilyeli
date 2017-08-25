import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import Home from './../containers/Home';
import About from './../containers/About';
import Contact from './../containers/Contact';
import NotFound from './../containers/NotFound';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  ABOUT: `${ publicPath }about`,
  CONTACT: `${ publicPath }contact`,
};

export default () => (
  <Switch>
    <Route exact path={ routeCodes.HOME } component={ Home } />
    <Route path={ routeCodes.ABOUT } component={ About } />
    <Route path={ routeCodes.CONTACT } component={ Contact } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
