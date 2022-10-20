import { useState } from 'react';

import Counter from '../components/Counter';
import Buttons from '../components/buttons/Buttons';

function CounterPage() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickNumber(value) {
    setCount(count + value);
  }
  return (
    <div>
      <p>assignment 1</p>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={handleClick}
      />
      <Buttons onClick={handleClickNumber} />
    </div>
  );
}

export default CounterPage;
