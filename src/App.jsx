import React from 'react';

import useCount from './useCount';

import IncrementCounter from './IncrementCounter';
import CounterContainer from './CounterContainer';

const App = () => {
  const [count, setCount] = useCount(0);
  return (
    <>
      <div>Counter</div>
      <IncrementCounter count={count} setCount={setCount} />
      <CounterContainer setCount={setCount} />
    </>
  );
};

export default App;
