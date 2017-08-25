import React from 'react';
import PropTypes from 'prop-types';

import s from './AppLayout.scss';

export default function AppLayout({ children }) {
  return (
    <div className={ s.layout }>
      {children}
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node,
};
