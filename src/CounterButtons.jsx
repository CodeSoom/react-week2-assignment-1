import React from 'react';
import CounterButton from './CounterButton';

export default function CounterButtons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <p>
      {numbers.map((number) => (
        <CounterButton key={number} number={number} onClick={onClick} />
      ))}
    </p>
  );
}
