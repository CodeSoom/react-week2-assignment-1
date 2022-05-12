import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

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

  function handleNumberClick(num) {
    setState({
      count: count + num,
    });
  }

  return (
    <Page count={count} onClick={handleClick} numberClick={handleNumberClick} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
