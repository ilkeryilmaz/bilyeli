import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ props }) => {
  const { label } = props;
  return (
    <div>
      <button className='button'>{ label }</button>
    </div>
  );
};

Button.propTypes = {
  props: PropTypes.object,
  label: PropTypes.string,
};

export default Button;
