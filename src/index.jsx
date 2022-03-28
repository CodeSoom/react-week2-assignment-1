import React, { useState } from 'react';
import ReactDom from 'react-dom';
import CountButton from './countButton';
import CounterNumber from './counterNumber';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  function handleClickNumber(value) {
    setCount((prev) => prev + value);
  }
  return (
    <div>
      <p>
        Counter
      </p>
      <p>
        <CountButton count={count} onClick={handleClick} />
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <CounterNumber value={i} onClick={() => handleClickNumber(i)} />
        ))}
      </p>
    </div>
  );
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
