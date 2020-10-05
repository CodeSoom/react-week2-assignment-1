import React from 'react';

import Button from './Button';

function Counter({ count, onClick }) {
  return (
    <Button onClick={() => onClick(1)}>
      Click me!
      (
      {count}
      )
    </Button>
  );
}

export default Counter;
