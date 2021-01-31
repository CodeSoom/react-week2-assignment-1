import React from 'react';

import NumberButton from './numberButton';

export default function NumberButtons({ onClick }) {
  function handleClickNumber(value) {
    onClick(value);
  }
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <NumberButton
          key={i}
          value={i}
          onClick={handleClickNumber}
        />
      ))}
    </p>
  );
}
