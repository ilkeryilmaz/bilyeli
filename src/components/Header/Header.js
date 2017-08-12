import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LogoImg from '../../assets/img/logo.svg';
import s from './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className={ s.header }>
        <div className={ s.logo }>
          <h1>Bilyeli</h1>
          <img src={ LogoImg } alt='Bilyeli' width='150px' />
        </div>
        { this.props.children }
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
};
