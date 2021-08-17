import { useState } from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

export default function Page() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick({ number }) {
    setState({
      count: count + number,
    });
  }

  return (
    <div>
      <p>Hello World!</p>
      <Counter
        count={count}
        onClick={handleClick}
      />
      <Buttons
        onClick={handleClick}
      />
    </div>
  );
}
