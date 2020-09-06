import React from 'react';
import Button from './button';

function Buttons({ handleClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <p>
      {numbers.map((i) => (
        <Button key={i} handleClick={handleClick}>
          {i}
        </Button>
      ))}
    </p>
  );
}

export default Buttons;
