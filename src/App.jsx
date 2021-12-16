import React, { useState } from 'react';
import CounterPage from './pages/CounterPage';

export default function App() {
 const [count, setCount] = useState(0);

 function handleClick(size) {
  setCount(count + size);
 }

 return (
  <CounterPage
   count={count}
   onClick={() => handleClick(1)}
   onClickNumber={(number) => handleClick(number)}
  />
 );
}
