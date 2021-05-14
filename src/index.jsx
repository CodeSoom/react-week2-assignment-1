import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  function handleClickPlusOne() {
    setCount(count + 1);
  }

  function handleClickPlusNumber(value) {
    setCount(count + value);
  }

  return (
    <Page
      count={count}
      onClickPlusOne={handleClickPlusOne}
      onClickPlusNumber={handleClickPlusNumber}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
