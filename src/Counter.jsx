import React from 'react';
import Button from './Button';

function Counter({ count, onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      Click me! (
      {count}
      )
    </Button>
  );
}

export default Counter;
