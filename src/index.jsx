import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';
import ClickMe from './ClickMe';

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
      <Buttons setCount={setCount} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
