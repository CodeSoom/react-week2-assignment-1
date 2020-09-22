import React, { useState } from 'react';
import ReactDom from 'react-dom';

import Buttons from './Buttons';
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

  const handleClickNumber = (value) => {
    setState({
      count: count + value,
    });
  };

  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={handleClick} />
      <Buttons onClick={handleClickNumber} />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
