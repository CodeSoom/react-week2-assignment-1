import React, { useState } from 'react';

import CounterPage from './CounterPage';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = {
    counter: () => {
      setState({
        count: count + 1,
      });
    },
    number: (increment) => {
      setState({
        count: count + increment,
      });
    },
  };

  return (
    <CounterPage count={count} onClick={handleClick} />
  );
}
