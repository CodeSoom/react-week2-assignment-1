import React, { useState } from 'react';

import Title from './components/Title';
import Counter from './components/Counter';


const buttons = [1, 2, 3, 4, 5];

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const onClickCount = (number) => {
    setState({
      ...state,
      count: count + number,
    });
  };

  return (
    <>
      <Title title="Counter" />
      <Counter buttons={buttons} count={count} onClick={onClickCount} />
    </>
  );
}

export default App;
