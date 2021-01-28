import React from 'react';
import Button from './Button';

function Buttons({ onClick }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button onClick={onClick} i={i} key={i}>
          {i}
        </Button>
      ))}
    </>
  );
}

export default Buttons;
