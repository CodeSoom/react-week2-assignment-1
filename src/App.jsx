import React, { useState } from 'react';

import ClickMe from './ClickMe';
import Numbers from './Numbers';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClickCount = () => {
    setCount(count + 1);
  };

  const handleClickNumbers = (number) => {
    setCount(count + number);
  };

  return (
    <>
      <p>Counter</p>
      <ClickMe
        count={count}
        onClick={handleClickCount}
      />
      <Numbers
        onClick={handleClickNumbers}
      />
    </>
  );
};

export default App;
