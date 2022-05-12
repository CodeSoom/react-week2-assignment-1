import React from 'react';

import useCount from './useCount';

import NumberCounters from './NumberCounters';
import Counter from './Counter';
import Title from './Title';

const App = () => {
  const [count, setCount] = useCount(0);

  const onCounter = (value = 1) => {
    setCount(value);
  };

  return (
    <>
      <Title />
      <Counter onCounter={onCounter}>
        Click me!(
        {count}
        )
      </Counter>
      <NumberCounters onCounter={onCounter} />
    </>
  );
};

export default App;
