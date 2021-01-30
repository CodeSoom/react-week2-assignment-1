import React from 'react';

import Button from './Button';

function Buttons({ onClick }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((number) => (
        <Button key={number} number={number} onClick={onClick}>
          {number}
        </Button>
      ))}
    </div>
  );
}

export default Buttons;
