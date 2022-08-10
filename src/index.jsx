/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [number, setNumber] = useState({
    count: 0,
  });

  const { count } = number;

  function handleClick() {
    setNumber({ count: count + 1 });
  }

  function handleClickNumber(value) {
    setNumber({ count: count + value });
  }

  return (
    <div>
      <p>Counter</p>
      <p>
        <button type="button" onClick={() => handleClick()}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <button key={i} type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
