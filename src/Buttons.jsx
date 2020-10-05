import React from 'react';

function Buttons({
  onClick,
}) {
  return (
    [1, 2, 3, 4, 5].map((number) => (
      <button
        key={number}
        type="button"
        onClick={() => onClick(number)}
      >
        {number}
      </button>
    ))
  );
}

export default Buttons;
