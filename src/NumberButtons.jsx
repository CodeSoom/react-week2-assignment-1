import React from 'react';
import NumberButton from './NumberButton';

const numbers = [1, 2, 3];

function NumberButtons() {
  return (
    <p>
      {
        numbers.map((value) => <NumberButton key={value}>{value}</NumberButton>)
      }
    </p>
  );
}

export default NumberButtons;
