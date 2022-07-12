import React, { useState } from 'react';
import Button from './Button';
import NumberButton from './NumberButton';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(numberToBeAdded = 1) {
    setCount((prevState) => prevState + numberToBeAdded);
  }

  return (
    <>
      <p>Counter</p>
      <p>
        <Button count={count} onClick={handleClick} />
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <NumberButton key={i} number={i} onClick={handleClick} />
        ))}
      </p>
    </>
  );
}

export default App;
