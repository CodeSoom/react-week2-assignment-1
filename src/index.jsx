import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './Page';

const App = () => {
  const [count, setCount] = useState(0);

  function handleClick({ difference }) {
    setCount(count + difference);
  }

  return (
    <Page count={count} onClick={handleClick} />
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
