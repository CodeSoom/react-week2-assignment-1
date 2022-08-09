import React from 'react';

function NumberButtons() {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <button
          type="button"
          key={number}
        >
          {number}
        </button>
      ))}
    </p>
  );
}

export default NumberButtons;
