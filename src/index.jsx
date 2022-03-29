import { useState } from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import Counter from './components/Counter';
import Button from './components/Button';

const numbers = [1, 2, 3, 4, 5];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title />
      <Counter setCount={setCount}>
        Click me!
        (
        { count }
        )
      </Counter>
      <p>
        {numbers.map((number) => (
          <Button setCount={setCount}>
            {number}
          </Button>
        ))}
      </p>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
