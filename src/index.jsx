import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './pages/counter';

// 리액트 2-1 과제 : 1차 제출
// 관심사 분리하기

function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;
  const numbers = [1, 2, 3, 4, 5];
  function handleClick(value) {
    setState({
      count: count + value,
    });
  }
  return <Counter numbers={numbers} count={count} onClick={handleClick} />;
}

ReactDOM.render(<App />, document.getElementById('app'));
