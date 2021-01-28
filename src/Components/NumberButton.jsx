import React from 'react';

function NumberButton({ number, onClick }) {
  return (
    <button name={number} type="button" onClick={onClick}>
      {number}
    </button>
  );
}

export default NumberButton;
