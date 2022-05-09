import React from 'react';
import Button from './Button';

function CountBtn({ count, onClick }) {
  return (
    <div>
      <Button
        key="click"
        type="button"
        onClick={() => onClick(1)}
      >
        Click me!
        {count}
      </Button>
    </div>
  );
}

export default CountBtn;
