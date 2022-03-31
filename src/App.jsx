import { useState } from 'react';
import Button from './components/Button';

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    setCount(value);
  };

  return (
    <>
      <h2>Counter</h2>
      <Button onClick={() => handleCount(count + 1)}>
        Click me!
        (
        {count}
        )
      </Button>
      <br />
      <br />
      {Array.from({ length: 5 }, (_, i) => (
        <Button value={i + 1} onClick={() => handleCount(count + i + 1)}>
          {i + 1}
        </Button>
      ))}
    </>
  );
};

export default App;
