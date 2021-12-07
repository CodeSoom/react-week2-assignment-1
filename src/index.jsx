import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CounterPage from './pages/CounterPage';

function App() {
 const [state, setState] = useState({
  count: 0,
 });

 const { count } = state;

 function handleClick(size) {
  setState({
   count: count + size,
  });
 }

 return (
  <CounterPage
   count={count}
   onClick={() => handleClick(1)}
   onClickNumber={(number) => handleClick(number)}
  />
 );
}

ReactDOM.render(
 <App />,
 document.getElementById('app'),
);
