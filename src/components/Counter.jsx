import React from 'react';

import Button from '../commons/Button';

function Counter({ count, onClick }) {
  return (
    <Button count={1} onClick={onClick}>
      Click me
      (
      {count}
      )
    </Button>
  );
}

export default Counter;
