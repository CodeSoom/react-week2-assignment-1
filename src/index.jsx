import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CounterPage from './pages/CounterPage';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const numberList = [1, 2, 3, 4, 5];

  const handleClick = () => {
    setState({
      count: count + 1,
    });
  };

  return (
    <div>
      <CounterPage count={count} handleClick={handleClick} numberList={numberList} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
