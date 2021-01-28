import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  function handleCounterClick() {
    setCount(count + 1);
  }

  return <Page count={count} counterClick={handleCounterClick} setCount={setCount} />;
}

export default App;
