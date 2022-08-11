import React from 'react';
import Button from './Button';

function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button keyNumber={i} onClick={onClick} />
      ))}
    </p>
  );
}

export default Buttons;
