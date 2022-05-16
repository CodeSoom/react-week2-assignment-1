import React from 'react';
import Counter from './Counter';

export default function CounterContainerView({ count, onCounter, countNumbers }) {
  return (
    <div>
      <Counter onCounter={onCounter}>
        Click me!(
        {count}
        )
      </Counter>
      <br />
      {countNumbers.map((i) => (
        <Counter onCounter={onCounter} value={i}>
          {i}
        </Counter>
      ))}
    </div>
  );
}
