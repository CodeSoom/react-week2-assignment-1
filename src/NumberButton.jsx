import React from 'react';

const NumberButton = ({ value, onClick }) => (
  <button type="button" onClick={onClick}>
    {value}
  </button>
);

export default NumberButton;
