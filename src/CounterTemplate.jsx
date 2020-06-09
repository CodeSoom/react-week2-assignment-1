import React from 'react';

import CounterButton from './components/CounterButton';
import NumberCounterButtons from './components/multiCounter/NumberCounterButtons';
import Title from './components/Title';

export default function CounterTemplate({ count, onClick }) {
  return (
    <div>
      <Title />
      <CounterButton count={count} onClick={() => onClick(1)} />
      <NumberCounterButtons onClick={onClick} />
    </div>
  );
}
