import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({
  count,
  onClick,
}) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons onClick={onClick} />
    </div>
  );
}
