import React from 'react';
import Button from './Button';

function Numbers({ numbers, onClick }) {
  return (
    <p>
      {numbers.map((i) => (
        <Button key={i} onClick={() => onClick(i)}>{i}</Button>
      ))}
    </p>
  );
}

export default Numbers;
