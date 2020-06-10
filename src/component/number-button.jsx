import React from 'react';

function NumberButton({ count, number, onClick }) {
  return (
    <button type="button" onClick={() => onClick({ count, number })}>
      {number}
    </button>
  );
}

export default NumberButton;
