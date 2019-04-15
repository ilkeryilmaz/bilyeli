import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = ({ children }) => (
  <header className='header'>
    <div>
      <h1>Bilyeli</h1>
      <p>Boilerplate for React/Redux app.</p>
    </div>
    <div>{children}</div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
