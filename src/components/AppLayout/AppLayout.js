import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = (props) => {
  const { children } = props;

  return (
    <div>
      { children }
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
