import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ value, onClickNumber }) {
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
