import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(buttonNumber) {
    setCount(count + buttonNumber);
  }
  return <Page onClick={handleClick} count={count} />;
}

ReactDOM.render(<App />, document.getElementById('app'));
