import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';
import Counter from './Counter';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={handleClick}
      />
      <Buttons />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
