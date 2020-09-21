import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Components/Button';

const INCREASED_NUMBERS = [1, 2, 3, 4, 5];

function App() {
  const [count, setCount] = useState(0);

  function handleClickIncreasedNumber(step) {
    setCount(count + step);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>
        <Button onClick={() => handleClickIncreasedNumber(1)}>
          Click me (
          {count}
          )
        </Button>
      </p>
      <p>
        {INCREASED_NUMBERS.map((i) => (
          <Button key={i} onClick={() => handleClickIncreasedNumber(i)}>
            {i}
          </Button>
        ))}
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
