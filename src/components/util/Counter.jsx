import React from 'react';

import Button from '../common/Button';

function Counter({ count, onClick }) {
  return (
    <Button onClick={() => onClick()}>
      Click me
      (
      {count}
      )
    </Button>
  );
}

export default Counter;
