import { useState } from 'react';

import Page from './Page';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (incrementNumber) => {
    setCount(count + incrementNumber);
  };

  return <Page count={count} onClick={handleCount} />;
};

export default Counter;
