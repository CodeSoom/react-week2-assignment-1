import React from 'react';

export default function NumberButtons({ onClickPlusNumber }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <p>
      {numbers.map((number) => (
        <button
          key={number}
          type="button"
          onClick={() => onClickPlusNumber(number)}
        >
          {number}
        </button>
      ))}
    </p>
  );
}
