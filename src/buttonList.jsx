import React, { memo } from 'react';
import Button from './button';

function ButtonList({ numbers, onClick }) {
  return (
    <div>
      {numbers.map((number) => (
        <Button key={number} onClick={() => onClick(number)}>
          {number}
        </Button>
      ))}
    </div>
  );
}

export default memo(ButtonList);
