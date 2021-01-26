import React, { useState } from 'react';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    setCount((prevCount) => prevCount + 1);
  }

  function onClickNumberButton(number) {
    setCount((prevCount) => prevCount + number);
  }

  return (
    <div>
      <p>Counter</p>
      <button type="button" onClick={onClickButton}>
        Click me! (
        {count}
        )
      </button>
      <p>
        {[1, 2, 3, 4, 5].map((number) => (
          <Button
            key={number}
            onClick={
              () => onClickNumberButton(number)
            }
          >
            {number}
          </Button>
        ))}
      </p>
    </div>
  );
}

export default App;
