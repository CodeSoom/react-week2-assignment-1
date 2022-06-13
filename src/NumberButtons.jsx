import React from 'react';
import NumberButton from './NumberButton';

const NumberButtons = ({ onClick }) => (
  <p>
    {[1, 2, 3, 4, 5].map((i) => (
      <NumberButton
        key={i}
        value={i}
        onClick={() => onClick(i)}
      />
    ))}
  </p>
);

export default NumberButtons;
