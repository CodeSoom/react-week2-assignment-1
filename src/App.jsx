import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (value) => {
    setCount(count + value);
  };

  const handleClickButton = () => {
    updateCount(1);
  };

  const handleClickButtons = (number) => {
    updateCount(number);
  };

  return (
    <Page
      count={count}
      onButtonClick={handleClickButton}
      onButtonsClick={handleClickButtons}
    />
  );
}

export default App;
