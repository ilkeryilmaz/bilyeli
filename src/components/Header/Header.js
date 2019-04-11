import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LogoImg from 'assets/img/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>Bilyeli</h1>
          <p>Boilerplate for React/Redux app.</p>
        </div>
        { this.props.children }
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
};
