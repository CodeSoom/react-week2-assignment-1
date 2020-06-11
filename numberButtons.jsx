import React from 'react';
import Button from './button';

function NumberButtons({ handleClickNumber }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button
          key={i}
          value={i}
          handleClickNumber={handleClickNumber}
        >
          {i}
        </Button>
      ))}
    </p>
  );
}

export default NumberButtons;
