import { useState } from 'react';

import CountButton from './CountButton';
import CountNumberButton from './CountNumberButton';

export default function CountPage() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  function handleClickNumber(value) {
    setCount((prev) => prev + value);
  }
  return (
    <div>
      <p>
        Counter
      </p>
      <p>
        <CountButton count={count} onClick={handleClick} />
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <CountNumberButton value={i} onClick={() => handleClickNumber(i)} />
        ))}
      </p>
    </div>
  );
}
