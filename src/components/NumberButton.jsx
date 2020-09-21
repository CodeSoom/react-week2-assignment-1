import React from 'react';

function NumberButton({ value, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default NumberButton;
