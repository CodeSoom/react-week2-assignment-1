import React from 'react';
import PropTypes from 'prop-types';

function NumberButton({ onClick, children }) {
  return <button type="button" onClick={onClick}>{children}</button>;
}

NumberButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.number.isRequired,
};

export default NumberButton;
