import React from 'react';
import Button from './Button';

function Counter({ count, onClick }) {
  const number = 1;

  return (
    <Button
      onClick={() => onClick(number)}
    >
      Click me!
      (
      {count}
      )
    </Button>
  );
}

export default Counter;
