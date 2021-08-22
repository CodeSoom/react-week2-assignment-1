import { useState } from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

export default function Page() {
  const [count, setCount] = useState(0);

  function handleClick({ number }) {
    setCount(count + number);
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
