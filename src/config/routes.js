import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Routes
import Home from './../routes/Home';
import About from './../routes/About';
import Contact from './../routes/Contact';
import NotFound from './../routes/NotFound';

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
