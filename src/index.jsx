import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Buttons from './Buttons';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Counter
      <p>
        {count}
      </p>
      <p>
        <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Click me!
          (
          <span>
            {count}
          </span>
          )
        </Button>
      </p>
      <p>
        <Buttons setCount={setCount} />
      </p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
