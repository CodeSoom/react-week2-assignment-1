import { useState } from 'react';

import Buttons from './buttons';
import Counter from './counter';

export default function Page() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickCounter() {
    setState({
      count: count + 1,
    });
  }

  function handleClickButton(i) {
    setState({
      count: count + i,
    });
  }

  return (
    <div>
      <Counter
        count={count}
        onClick={handleClickCounter}
      />
    </div>
      <Buttons onClick={handleClickButton} />
  );
}
