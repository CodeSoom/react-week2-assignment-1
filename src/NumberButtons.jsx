import React from 'react';
import Button from './Button';

function NumberButtons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button
          key={i}
          value={i}
          onClick={() => onClick(i)}
        >
          {i}
        </Button>
      ))}
    </p>
  );
}

export default NumberButtons;
