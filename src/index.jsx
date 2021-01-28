import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

function Counter() {
  const [number, setState] = useState(0);

  function handleClick(value) {
    setState(value);
  }

  return (
    <div>
      <p>
        Counter
      </p>
      <p>
        <Button
          text={`Click me! (${number})`}
          onClick={() => handleClick(number + 1)}
        />
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <Button
            text={i}
            onClick={() => handleClick(number + i)}
          >
            {i}
          </Button>
        ))}
      </p>
    </div>

  );
}

function Page() {
  return (
    <Counter />
  );
}

ReactDOM.render(
  <Page />,
  document.getElementById('app'),
);
