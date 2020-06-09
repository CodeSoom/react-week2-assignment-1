import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './pages/Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(number = 1) {
    setState({
      count: count + number,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
