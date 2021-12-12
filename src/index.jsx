import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import Page from './components/Page';

function increaseCount() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(number) {
    setState({
      count: count + number,
    });
  }

  return {
    count,
    handleClick,
  };
}

function App() {
  const {
    count,
    handleClick,
  } = increaseCount();

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

function render() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

render();
