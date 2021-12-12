import { useState } from 'react';

import Page from './Page';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClickCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleClickNumber = (number) => {
    setCount((prevCount) => prevCount + number);
  };

  return (
    <Page
      count={count}
      onClickCount={handleClickCount}
      onClickNumber={handleClickNumber}
    />
  );
}
