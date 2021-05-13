import React, { useState } from 'react';
import Page from './Page';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClickPlusCount = () => {
    setCount(count + 1);
  };

  const handleClickNumber = (number) => {
    setCount(count + number);
  };

  return (
    <Page
      counter={count}
      onClickPlusCount={handleClickPlusCount}
      onClickNumber={handleClickNumber}
    />
  );
};

export default App;
