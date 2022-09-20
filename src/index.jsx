import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(i = 1) {
    setCount(count + i);
  }

  return (
    <Page count={count} onClick={(i) => handleClick(i)} />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
