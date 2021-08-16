import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';
import NumberButtons from './NumberButtons';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        Counter
      </h1>
      <p>
        {count}
      </p>
      <Counter setCount={setCount}>{count}</Counter>
      <NumberButtons setCount={setCount} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
