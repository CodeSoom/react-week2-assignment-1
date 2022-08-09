import React, { useState } from 'react';
import ReactDom from 'react-dom/client';

import CounterPage from './CounterPage';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(number) {
    setCount(count + number);
  }

  return (
    <CounterPage
      count={count}
      onClick={handleClick}
    />
  );
}

ReactDom.createRoot(document.getElementById('app')).render(<App />);
