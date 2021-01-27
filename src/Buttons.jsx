import React from 'react';
import Button from './Button';

function Buttons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <p>
      {numbers.map((i) => (
        <Button
          key={i}
          onClick={onClick}
        >
          {i}
        </Button>
      ))}
    </p>
  );
}


export default Buttons;
