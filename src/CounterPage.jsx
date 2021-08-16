import React, { useState } from 'react';
import Button from './Button';

export default function CounterPage() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;

  function handleClick(number = 1) {
    setState({
      count: count + number,
    });
  }

  return (
    <div>
      <Button onClick={() => handleClick()}>
        Click me! (
        {count}
        )
      </Button>
      <div>
        {
          [1, 2, 3, 4, 5].map((value) => (
            <Button key={value.toString()} onClick={() => handleClick(value)}>{}</Button>
          ))
        }
      </div>
    </div>
  );
}
