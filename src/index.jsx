import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Buttons from './components/Buttons';
// 리액트 2-1 과제 : 1차 제출

function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;
  const numbers = [1, 2, 3, 4, 5];
  function handleClick(value) {
    setState({
      count: count + value,
    });
  }
  return (
    <div>
      <p>Counter</p>
      <Button id="Click me" count={count} onClick={() => { handleClick(1); }} />
      <Buttons numbers={numbers} count={count} onClick={handleClick} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
