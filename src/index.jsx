import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(number) {
    setCount(count + number);
  }

  return (
    <>
      <p>Counter</p>
      <p>
        <button type="button" onClick={() => handleClick(1)}>
          Click me! (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => <button type="button" onClick={() => handleClick(i)}>{i}</button>)}
      </p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
