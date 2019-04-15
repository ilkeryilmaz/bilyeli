import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.scss';

const Button = ({ children, ...props }) => {
  const { primary, secondary, className, handleClick } = props;

  const classNames = cx(
    'button',
    { 'button--primary': primary, 'button--secondary': secondary },
    className,
  );

  return (
    <button type='button' className={classNames} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
