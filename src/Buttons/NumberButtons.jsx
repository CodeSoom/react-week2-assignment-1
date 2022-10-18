import React from 'react';
import NumberButton from './NumberButton';

function NumberButtons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {numbers.map((i) => (
        <NumberButton
          type="button"
          key={i}
          onClick={(onClick)}

        >
          {i}
        </NumberButton>
      ))}
    </div>
  );
}

export default NumberButtons;
