import React from 'react';

import CounterButton from './CounterButton';
import NumberCounterButtons from './multiCounter/NumberCounterButtons';
import Title from './Title';

export default function CounterTemplate({ count, onClick }) {
  return (
    <div>
      <Title />
      <CounterButton count={count} onClick={() => onClick(1)} />
      <NumberCounterButtons onClick={onClick} />
    </div>
  );
}
