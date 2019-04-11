import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => (
  <Fragment>
    <div>
      <h1>Bilyeli</h1>
      <p>Boilerplate for React/Redux app.</p>
    </div>
    <div>{children}</div>
  </Fragment>
);

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
