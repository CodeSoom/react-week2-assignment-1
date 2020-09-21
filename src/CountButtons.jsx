import React from 'react';

export default function CountButtons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <p>
      {numbers.map((number) => (
        <button type="button" key={number} onClick={() => onClick(number)}>
          {number}
        </button>
      ))}
    </p>
  );
}
