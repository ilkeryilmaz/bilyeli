import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Config
import { routeCodes } from './../../config/routes';

// Styles
import s from './Navigation.scss';

export default class Navigation extends Component {
  render() {
    return (
      <nav className={ s.navigation }>
        <Link to={ routeCodes.HOME }>Home</Link>
        <Link to={ routeCodes.ABOUT }>About</Link>
        <Link to={ routeCodes.CONTACT }>Contact</Link>
        <Link to='/404' >404</Link>
      </nav>
    );
  }
}
