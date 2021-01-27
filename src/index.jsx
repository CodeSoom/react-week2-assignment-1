import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page';

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

  function handleClickNumber(selectedNumber) {
    setState({
      count: count + selectedNumber,
    });
  }

  return (
    <Page
      count={count}
      handleClick={handleClick}
      handleClickNumber={handleClickNumber}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
