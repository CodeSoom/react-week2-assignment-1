import React, { useState } from 'react';
import CountBtn from './component/CountBtn';

function App() {
  const [count, setCount] = useState(0);

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
    </div>
  );
}

export default App;
