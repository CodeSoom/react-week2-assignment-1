import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ViewCounter from './viewCounter';


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
    <ViewCounter
      count={count}
      onClick={handleClick}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
