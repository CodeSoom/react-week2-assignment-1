import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ counter, onHandleClickBtn }) => (
  <button type="button" onClick={onHandleClickBtn}>
    Click! (
    {counter}
    )
  </button>
);

export default Button;
