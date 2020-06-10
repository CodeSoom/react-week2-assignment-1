import React from 'react';

function Button({ value, handleClickNumber }) {
  return (
    <button type="button" onClick={() => handleClickNumber(value)}>
      {value}
    </button>
  );
}

export default Button;
