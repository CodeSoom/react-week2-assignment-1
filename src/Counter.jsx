import React from 'react';

import Button from './Button';

function Counter({ count, onClick }) {
  const COUNTER_ADD_ONE = 1;
  return (
    <Button onClick={() => onClick(COUNTER_ADD_ONE)}>
      Click me! (
      {count}
      )
    </Button>
  );
}

export default Counter;
