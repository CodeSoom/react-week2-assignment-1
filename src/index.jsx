import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
// 리액트 2-1 과제 : 첫 커밋

function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;
  function handleClick() {
    setState({
      count: count + 1,
    });
  }
  return (
    <div>
      <p>Counter</p>
      <Button id="Click me" count={count} onClick={handleClick} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
