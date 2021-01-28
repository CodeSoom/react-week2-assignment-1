import React from 'react';
import Button from './Button';

function Buttons({ count, onClick }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button onClick={onClick} count={count} i={i} key={i}>
          {i}
        </Button>
      ))}
    </>
  );
}

export default Buttons;
