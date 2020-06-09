import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './page';

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

  function handleNumbersClick(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <Page
      count={count}
      handleClick={handleClick}
      handleNumbersClick={handleNumbersClick}
    />
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
