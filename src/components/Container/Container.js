import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <Fragment>
    { children }
  </Fragment>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
