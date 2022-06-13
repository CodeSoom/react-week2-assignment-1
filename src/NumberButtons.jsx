import React from 'react';
import NumberButton from './NumberButton';

const numbers = [1, 2, 3, 4, 5];

const NumberButtons = ({ onClick }) => (
  <p>
    {numbers.map((i) => (
      <NumberButton
        key={i}
        value={i}
        onClick={() => onClick(i)}
      />
    ))}
  </p>
);

export default NumberButtons;
