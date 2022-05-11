import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react/cjs/react.development';
import Button from './Button';
import Values from './Values';

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <p>
        Counter
      </p>
      <p>
        <Button value={value} setValue={setValue} />
      </p>
      <p>
        <Values setValue={setValue} />
      </p>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
