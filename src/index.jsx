import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickNumber(value) {
    setCount(count + value);
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
      onClickNumber={handleClickNumber}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
