import React from 'react';

import Button from './Button';

function Buttons({ count, onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button
          key={i}
          onClick={() => onClick(count + i)}
        >
          {i}
        </Button>
      ))}
    </p>
  );
}

export default Buttons;
