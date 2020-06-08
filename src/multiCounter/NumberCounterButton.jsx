import React from 'react';

function NumberCounterButton({ number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

export default NumberCounterButton;
