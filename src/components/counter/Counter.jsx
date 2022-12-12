import { useState } from 'react';

import Buttons from './Buttons';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = (increment = 1) => {
    setCount((prevCount) => prevCount + increment);
  };

  return (
    <div>
      <Button onIncrease={() => increaseCount(1)}>
        Click me! (
        {count}
        )
      </Button>

      <Buttons onIncrease={increaseCount} />
    </div>
  );
};

export default Counter;
