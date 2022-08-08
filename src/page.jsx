import React from 'react';
import Button from './button';
import Counter from './counter';

export default function Page({ count, onClick, onButtonClick }) {
  return (
    <div>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Button
        onClick={(value) => onButtonClick(value)}
      />
    </div>
  );
}
