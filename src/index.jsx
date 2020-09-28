/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Buttons from './Buttons';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleNumberClick(value) {
    setState({
      count: count + value,
    });
  }

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={handleNumberClick}
      />
      <Buttons
        count={count}
        onClick={handleNumberClick}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
