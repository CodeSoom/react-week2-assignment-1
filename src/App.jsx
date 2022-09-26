import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(i = 1) {
    setCount(count + i);
  }

  return <Page count={count} onClick={handleClick} />;
}
