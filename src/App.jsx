import { useState } from 'react';

import CountButton from './CountButton';
import NumberButtons from './NumberButtons';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function setCount(value) {
    setState({ ...state, count: count + value });
  }

  function handleCountClick() {
    setCount(1);
  }

  function handleNumberClick(value) {
    setCount(value);
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
