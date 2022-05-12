import React from 'react';
import Button from './Button';

function Buttons({ onClick }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} onClick={onClick} num={i}>
          {i}
        </Button>
      ))}
    </div>
  );
}

export default Buttons;
