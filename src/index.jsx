/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CountApp from './CountApp';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  function handleNumberClick(value) {
    setState({
      count: count + value,
    });
  }

  return (
    <div>
      <CountApp
        count={count}
        onClick={handleClick}
        onNumberClick={handleNumberClick}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
