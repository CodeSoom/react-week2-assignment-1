import React, { useState } from 'react';

import Button from './components/Button';
import NumberInput from './components/NumberInput';

function App() {
  const [state, setState] = useState({ count: 0, input: 0 });
  const { count, input } = state;

  function handleClick(value) {
    setState({ ...state, count: count + value });
  }

  function handleChange(e) {
    setState({ ...state, input: parseInt(e.target.value, 10) });
  }

  return (
    <div>
      <p>Counter</p>
      <p>
        <Button
          onClick={() => handleClick(1)}
        >
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Click me! ({count})
        </Button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <Button
            key={i}
            onClick={() => handleClick(i)}
          >
            {i}
          </Button>
        ))}
      </p>
      <p>
        <NumberInput
          value={input}
          onChange={handleChange}
        />
        <Button
          onClick={() => handleClick(input)}
        >
          increase
        </Button>
      </p>
    </div>
  );
}

export default App;
