import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

function App() {
  const [state, setCount] = useState({ count: 0 });
  const { count } = state;

  function handleClick(buttonNumber) {
    setCount({ count: count + buttonNumber });
  }
  return <Page onClick={handleClick} count={count} />;
}

ReactDOM.render(<App />, document.getElementById('app'));
