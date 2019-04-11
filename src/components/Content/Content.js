import React from 'react';
import PropTypes from 'prop-types';

export default function Content({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}

Content.propTypes = {
  children: PropTypes.node,
};
