import React from 'react';

import Button from './Button';

function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button
          key={i}
          count={i}
          onClick={onClick}
        >
          {i}
        </Button>
      ))}
    </p>
  );
}

export default Buttons;
