import React, { useState } from 'react';

import Counter from './Counter';
import Buttons from './Buttons';


function App() {
  const [number, setNumber] = useState(0);

  function handleClick(plus) {
    setNumber(number + plus);
  }
  return (
    <div>
      <p>Counter</p>
      <Counter result={number} />
      <Buttons onClick={handleClick} />
    </div>
  );
}

export default App;
