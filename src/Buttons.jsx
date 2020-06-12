import React from 'react';
import Button from './Button';

export default function Buttons({ handleClick }) {
  return [1, 2, 3, 4, 5].map((i) => (
    // 선언적 프로그래밍
    <Button
      key={i}
      onClick={() => handleClick(i)}
    >
      {i}
    </Button>
  ));
}
