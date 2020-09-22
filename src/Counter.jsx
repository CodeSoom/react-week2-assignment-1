import React from 'react';
import Button from './Button';

function Counter({ count, onClick }) {
  return (
    <div>
      <Button onClick={() => onClick(1)}>
        {`Click me (${count})`}
      </Button>
    </div>
  );
}

export default Counter;
