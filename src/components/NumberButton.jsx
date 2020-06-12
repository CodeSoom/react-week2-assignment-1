import React from 'react';
import Button from './Button';

function NumberButton({ onClick }) {
  return (
    <p>
      {
        [1, 2, 3, 4, 5].map((i) => (
          <Button onClick={onClick} key={i} buttonValue={i} />
        ))
      }
    </p>
  );
}

export default NumberButton;
