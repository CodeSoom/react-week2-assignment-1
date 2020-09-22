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

  function handleClickNumber(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={handleClick}
      />
      <Buttons onClick={handleClickNumber} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
