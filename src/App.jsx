import React, { useState } from 'react';

import Buttons from './Buttons';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    setCount((prevCount) => prevCount + 1);
  }

  function onClickNumberButton(number) {
    setCount((prevCount) => prevCount + number);
  }

  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClickButton} />
      <Buttons onClick={onClickNumberButton} />
    </div>
  );
}

export default App;
