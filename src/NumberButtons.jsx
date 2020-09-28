import React from 'react';

import NumberButton from './NumberButton';

export default function NumberButtons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <p>
      {numbers.map((number) => (
        <NumberButton key={number} number={number} onClick={onClick} />
      ))}
    </p>
  );
}
