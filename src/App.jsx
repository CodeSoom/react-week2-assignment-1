import React, { useState } from 'react';

import CounterPage from './pages/CounterPage';

export default function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;

  function handleClick(value) {
    setState({ count: count + value });
  }

  return <CounterPage count={count} onClick={handleClick} />;
}
