import React from 'react';
import PropTypes from 'prop-types';

function NumberButton({ children }) {
  return <button type="button">{children}</button>;
}

NumberButton.propTypes = {
  children: PropTypes.number.isRequired,
};

export default NumberButton;
