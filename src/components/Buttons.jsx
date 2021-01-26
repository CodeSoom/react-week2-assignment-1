import React from 'react';
import Button from './Button';

const numbers = [1, 2, 3, 4, 5];

function Buttons({ onClick }) {
  return (
    <p>
      {numbers.map((number) => (
        <Button
          key={number}
          onClick={onClick}
        >
          {number}
        </Button>
      ))}
    </p>
  );
}

export default Buttons;
