import React, { useState } from 'react';

import Buttons from './components/Buttons';
import Counter from './components/Counter';

const App = () => {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = (num = 1) => {
    setState({ count: count + num });
  };

  return (
    <div className="App">
      <p>Counter</p>
      <Counter count={count} onClick={handleClick} />
      <Buttons onClick={handleClick} />
    </div>
  );
};

export default App;
