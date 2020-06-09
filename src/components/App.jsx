import React, { useState } from 'react';
import ClickmeButton from './ClickmeButton';
import NumberButtons from './NumberButtons';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClickButton = (value = 1) => {
    setState({
      count: count + value,
    });
  };

  return (
    <div>
      <p>Counter</p>
      <ClickmeButton
        count={count}
        onClick={handleClickButton}
      />
      <NumberButtons
        onClick={handleClickButton}
      />
    </div>
  );
}
