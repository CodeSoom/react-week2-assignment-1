import React from 'react';

import NumberButton from './number-button';

export default function ButtonGroup({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <p>
      {numbers.map((number) => (
        <NumberButton
          number={number}
          onClick={onClick}
        />
      ))}
    </p>
  );
}
