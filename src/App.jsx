import { useState } from 'react';

import Title from './Title';
import CounterButton from './CounterButton';
import NumberButtons from './NumberButtons';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = (increase) => {
    setCount(count + increase);
  };

  return (
    <>
      <Title />
      <CounterButton
        value={count}
        onClick={() => handleClick(1)}
      />
      <NumberButtons
        numbers={[1, 2, 3, 4, 5]}
        onClick={handleClick}
      />
    </>
  );
};

export default App;
