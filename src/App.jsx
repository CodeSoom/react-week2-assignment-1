// 리액트
import { useState } from 'react';
// 컴포넌트
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
