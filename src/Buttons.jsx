import React from 'react';
import Button from './Button';

function Buttons({ onButtonClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button
          key={i}
          onButtonClick={() => onButtonClick(i)}
        >
          {i}
        </Button>
      ))}
    </p>
  );
}

export default Buttons;
