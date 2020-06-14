import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';


function App() {
  const [count, setCount] = useState(0);

  return <Counter count={count} setCount={setCount} />;
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
