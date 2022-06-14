import { useState } from 'react';

import Counter from './pages/Counter';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (number = 1) => {
    setCount(count + number);
  };

  return (
    <Counter
      count={count}
      onClick={handleClick}
    />
  );
}

export default App;
