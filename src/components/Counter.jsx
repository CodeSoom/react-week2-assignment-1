import React from 'react';

import Button from '../commons/Button';

function Counter({ count, onClick }) {
  return (
    <Button onClick={() => onClick(count + 1)}>
      Click me
      (
      {count}
      )
    </Button>
  );
}

export default Counter;
