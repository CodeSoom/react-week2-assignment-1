import React, { useState } from 'react';
import Page from './page';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = (plus) => {
    setCount(count + plus);
  };
  return <Page count={count} onClick={handleCount} />;
};

export default Counter;
