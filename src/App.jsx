import { useState } from 'react';

import Button from './Button';
import IncrementButtons from './IncrementButtons';

const INCREMENT_NUMBER_LIST = [1, 2, 3, 4, 5];

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = (increment) => {
    setCount((prev) => prev + increment);
  };

  return (
    <>
      <p>Counter</p>
      <Button onClick={() => handleClick(1)}>{`Click me (${count})`}</Button>
      <IncrementButtons numberList={INCREMENT_NUMBER_LIST} onClick={handleClick} />
    </>
  );
};

export default App;
