import React, { useState } from 'react';

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

export default App;
