import React from 'react';
import Buttons from './Buttons';
import CounterBtn from './CounterBtn';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <CounterBtn
        count={count}
        onClick={onClick}
      />
      <Buttons onClick={onClick} />
    </div>
  );
}
