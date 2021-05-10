import React from 'react';
import PropTypes from 'prop-types';

function Button({ value, onClickNumber }) {
  return (
    <button type="button" onClick={() => onClickNumber(value)}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.number.isRequired,
  onClickNumber: PropTypes.func.isRequired,
};

export default Button;
