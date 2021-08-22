import { useState } from 'react';

import CountButton from './CountButton';
import NumberButtons from './NumberButtons';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function setCount(number) {
    setState({ ...state, count: count + number });
  }

  function handleCountClick() {
    setCount(1);
  }

  function handleNumberClick(number) {
    setCount(number);
  }

  return (
    <div>
      <p>
        <CountButton
          count={count}
          onClick={handleCountClick}
        />
      </p>
      <NumberButtons handleNumberClick={handleNumberClick} />
    </div>
  );
}
