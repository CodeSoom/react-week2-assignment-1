import React, { useState } from 'react';

import Page from './components/Page';

export default function App() {
  const [count, setCount] = useState(0);

  const handleCount = (number) => {
    setCount(number);
  };

  return (
    <Page
      count={count}
      handleCount={handleCount}
    />
  );
}
