import React from 'react';

import NumberButton from './NumberButton';

export default function Buttons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {numbers.map((i) => (
        <NumberButton
          key={i}
          onClick={() => onClick(i)}>
          {i}
        </NumberButton>
      ))}
    </div>

  );
}
