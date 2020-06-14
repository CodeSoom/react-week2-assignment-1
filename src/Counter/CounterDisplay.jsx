import React from 'react';


export default function CounterDisplay({ currentCount, handleClickNumberButton }) {
  return (
    <p>
      <button type="button" onClick={() => handleClickNumberButton(1)}>
        {`Click me (${currentCount})`}
      </button>
    </p>
  );
}
