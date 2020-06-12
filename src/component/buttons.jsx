import React from 'react';

import NumberButton from './NumberButton';

export default function Buttons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <p>
      {numbers.map((number) => (
        <NumberButton
          key={number.toString()}
          number={number}
          onClick={() => onClick(number)}
        />
      ))}
    </p>
  );
}
