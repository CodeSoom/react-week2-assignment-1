import React from 'react';
import Button from './Button';

function Buttons({ ButtonClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button
          key={i}
          ButtonClick={() => ButtonClick(i)}
        >
          {i}
        </Button>
      ))}
    </p>
  );
}

export default Buttons;
