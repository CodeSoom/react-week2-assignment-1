import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import NumberButtons from './numberButtons';

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
      <Button count={count} onClick={handleClick} />
      <NumberButtons onClick={handleClickNumber} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
