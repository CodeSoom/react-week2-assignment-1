import React, { useState } from 'react';

import Title from './components/Title';
import CountButton from './components/CountButton';
import NumberButtons from './components/NumberButtons';

export default function App() {
  const [count, setCount] = useState(0);

  const countUp = (number) => {
    setCount(count + Number(number));
  };

  const handleClick = (number) => {
    countUp(number);
  };
  return (
    <div>
      <Title />
      <CountButton increasingNumber={1} count={count} onClick={handleClick} />
      <NumberButtons increasingNumber={5} onClick={handleClick} />
    </div>
  );
}
