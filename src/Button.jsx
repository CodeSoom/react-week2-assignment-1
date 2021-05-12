import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ count, handleClickBtn }) => (
  <button type="button" onClick={handleClickBtn}>
    Click! (
    {count}
    )
  </button>
);

export default Button;
