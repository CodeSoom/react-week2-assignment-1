import React from 'react';

import useCount from './useCount';

import NumberCounters from './NumberCounters';
import Counter from './Counter';
import Title from './Title';

const App = () => {
  const [count, setCount] = useCount(0);
  return (
    <>
      <Title />
      <Counter handleCounter={() => setCount()}>
        Click me!(
        {count}
        )
      </Counter>
      <NumberCounters setCount={setCount} />
    </>
  );
};

export default App;
