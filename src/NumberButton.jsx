/* eslint-disable react/prop-types */
import React from 'react';

const NumberButton = ({ number, clickHandler }) => (
  <button type="button" onClick={clickHandler} style={{ margin: '0 5px 0 0' }}>
    {number}
  </button>
);

export default NumberButton;
