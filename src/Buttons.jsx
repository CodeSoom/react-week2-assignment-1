import React from 'react';

import Button from './Button';

function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3].map((i) => (
        <Button onClick={onClick} key={i}>
          {i}
        </Button>
      ))}
    </p>

  );
}

export default Buttons;
