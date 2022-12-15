import { useState } from 'react';

import Header from './layouts/Header';
import Counter from './counter/Counter';

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = (increment = 1) => {
    setCount((prevCount) => prevCount + increment);
  };

  return (
    <div>
      <Header />
      <Counter count={count} onIncreaseCount={increaseCount} />
    </div>
  );
};

export default App;
