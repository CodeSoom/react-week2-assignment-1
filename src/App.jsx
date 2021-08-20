import { useState } from 'react';

import CountButton from './CountButton';
import NumberButtons from './NumberButtons';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleCountClick() {
    setState({ count: count + 1 });
  }

  function setCount(value) {
    setState({ count: count + value });
  }

  return (
    <div>
      <p>
        <CountButton
          count={count}
          onClick={handleCountClick}
        />
      </p>
      <NumberButtons setCount={setCount} />
    </div>
  );
}
