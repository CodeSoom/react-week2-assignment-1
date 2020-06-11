import React from 'react';
import Button from './Button';

function NumberButton({ onClick }) {
  return (
    <p>
      {
        [1, 2, 3, 4, 5].map((i) => (
          <Button onClick={onClick}>{i}</Button>
        ))
      }
    </p>
  );
}

export default NumberButton;
