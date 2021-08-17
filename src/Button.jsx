import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
