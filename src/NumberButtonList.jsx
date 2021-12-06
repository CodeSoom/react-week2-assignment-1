import React from 'react';
import NumberButton from './NumberButton';

const BUTTON_NUMBER = [1, 2, 3, 4, 5];

function NumberButtonList({ onClick }) {
  return (
    <p>
      {BUTTON_NUMBER.map((i) => (
        <NumberButton
          key={i}
          onClick={onClick}
          value={i}
        >
          {i}
        </NumberButton>
      ))}
    </p>
  );
}

export default NumberButtonList;
