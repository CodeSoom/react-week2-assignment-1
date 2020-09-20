import React, { useState } from 'react';
import ReactDom from 'react-dom';

import Counter from './Counter';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = () => {
    setState({
      count: count + 1,
    });
  };

  return (
    <div>
      <p>Count</p>
      <Counter
        count={count}
        onClick={handleClick}
      />
    </div>
  );
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
