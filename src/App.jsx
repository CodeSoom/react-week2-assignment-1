import React, { useState } from 'react';
import CounterButton from './CounterButton';
import NumberButtons from './NumberButtons';
import Title from './Title';

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
