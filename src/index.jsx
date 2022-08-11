import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(number) {
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

ReactDOM.render(<App />, document.getElementById('app'));
