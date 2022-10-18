import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(clickNumber) {
    if (!clickNumber) {
      setState({
        count: count + 1,
      });
    }
    setState({
      count: count + clickNumber,
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
