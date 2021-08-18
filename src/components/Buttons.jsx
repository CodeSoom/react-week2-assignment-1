import React from 'react';
import Button from './Button';

function Buttons({ onClickNumber }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} handleClick={() => onClickNumber(i)}>
          {i}
        </Button>
      ))}
    </p>
  );
}

export default Buttons;
