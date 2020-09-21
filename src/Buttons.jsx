import React from 'react';
import Button from './Button';

function Buttons({
  onClick,
}) {
  return (
    [1, 2, 3, 4, 5].map((number) => (
      <Button
        value={number}
        onClick={onClick}
      >
        {number}
      </Button>
    ))
  );
}

export default Buttons;
