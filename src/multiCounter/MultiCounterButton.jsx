import React from 'react';

function CounterButton({ number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

export default CounterButton;
