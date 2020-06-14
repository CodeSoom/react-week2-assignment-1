import React, { useState } from 'react';
import Page from './page/Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleClick(num) {
    setState({
      count: count + num,
    });
  }

  return (
    <div>
      <Page count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
