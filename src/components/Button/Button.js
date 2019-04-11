import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ props }) => {
  const { label } = props;
  return (
    <button type='button' className='button'>
      {label}
    </button>
  );
};

Button.propTypes = {
  props: PropTypes.object,
  label: PropTypes.string
};

export default Button;
