import React from 'react';

function NumberButton({ value, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default NumberButton;
