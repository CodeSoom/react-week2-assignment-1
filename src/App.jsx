import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClickPlusCount = (increment) => {
    setCount(count + increment);
  };

  return (
    <Page
      counter={count}
      onClickPlusCount={handleClickPlusCount}
    />
  );
}
