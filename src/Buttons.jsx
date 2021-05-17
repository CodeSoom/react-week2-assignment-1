import React from 'react';

function Buttons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <p>
      {numbers.map((i) => (
        <button
          type="button"
          onClick={() => onClick(i)}
          key={i}
        >
          {i}
        </button>
      ))}
    </p>
  );
}

export default Buttons;
