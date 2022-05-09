import React, { useState } from 'react';
import CountBtn from './component/CountBtn';
import Numbers from './component/Numbers';

function App() {
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 3, 4, 5];

  function handleClicked(n) {
    setCount(count + n);
  }

  return (
    <div>
      <p>Counter</p>
      <CountBtn
        count={count}
        onClick={handleClicked}
      />
      <Numbers
        numbers={numbers}
        onClick={handleClicked}
      />
    </div>
  );
}

export default App;
