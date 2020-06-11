import React, { useState } from 'react';
import ReactDom from 'react-dom';

import Count from './pages/Count';

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  const handleClick = (number) => {
    setState({
      count: count + number,
    });
  };
  return <Count count={count} onClick={handleClick} />;
}

ReactDom.render(<App />, document.getElementById('app'));
