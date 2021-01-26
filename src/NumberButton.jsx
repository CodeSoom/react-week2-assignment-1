import React from 'react';

function NumberButton({ onClick, numberToAdd }) {
  return (
    <button type="button" onClick={onClick}>
      {numberToAdd}
    </button>
  );
}

export default NumberButton;
