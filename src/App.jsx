import React, { useState } from 'react';

import Title from './Title';
import CounterButton from './CounterButton';
import NumberButtons from './NumberButtons';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <Title />
      <CounterButton
        value={count}
        onClick={() => handleClick(1)}
      />
      <NumberButtons onClick={handleClick} />
    </>
  );
};

export default App;
