import React from 'react';

const NUMBER_ARRAY = [1, 2, 3, 4, 5];

function Buttons({ onClick }) {
  return (
    NUMBER_ARRAY.map((num) => (
      <button
        key={num}
        type="button"
        onClick={() => onClick(num)}
      >
        {num}
      </button>
    ))
  );
}

export default Buttons;
