import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react/cjs/react.development';

import Button from './Button';
import Values from './Values';

function App() {
  const [value, setValue] = useState(0);
  function handleClick(number) {
    setValue((prev) => prev + number);
  }

  return (
    <>
      <p>
        Counter
      </p>
      <p>
        <Button value={value} onClick={handleClick} />
      </p>
      <p>
        <Values onClick={handleClick} />
      </p>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
