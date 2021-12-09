import { useState } from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

export default function Page() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleIncreaseByNumber(number = 1) {
    setState({
      count: count + number,
    });
  }

  return (
    <>
      <Counter count={count} onClick={() => handleIncreaseByNumber(1)} />
      <Buttons onClick={handleIncreaseByNumber} />
    </>
  );
}
