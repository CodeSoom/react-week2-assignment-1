import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClickPlusNumber(value) {
    setCount(count + value);
  }

  return (
    <Page
      count={count}
      onClickPlusNumber={handleClickPlusNumber}
    />
  );
}
