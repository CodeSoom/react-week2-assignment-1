import { useState } from 'react';

import CounterPage from './pages/CounterPage';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickNumber(value) {
    setCount(count + value);
  }

  return (
    <CounterPage
      count={count}
      onClick={handleClick}
      handleClickNumber={handleClickNumber}
    />
  );
}

export default App;
