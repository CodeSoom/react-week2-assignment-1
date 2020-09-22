import React from 'react';
import Button from './Button';

function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <Button key={number} number={number} onClick={() => onClick(number)}>
          {number}
        </Button>
      ))}
    </p>
  );
}

export default Buttons;
