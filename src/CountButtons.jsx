import React from 'react';
import CountButton from './CountButton';

export default function CountButtons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <p>
      {numbers.map((number) => (
        <CountButton key={number} number={number} onClick={onClick} />
      ))}
    </p>
  );
}
