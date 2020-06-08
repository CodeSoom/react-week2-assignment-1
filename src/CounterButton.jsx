import React from 'react';

function CounterButton({ displayName, count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {displayName}
      (
      {count}
      )
    </button>
  );
}

export default CounterButton;
