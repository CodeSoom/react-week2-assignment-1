import React from 'react';

function CounterButton({ displayName, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {displayName}
    </button>
  );
}

export default CounterButton;
