import React, {useState} from "react";

import CounterPage from './CounterPage';

export default function App() {
    const [count, setCount] = useState(0);
  
    function handleClick(number) {
      setCount(count + number);
    }
  
    return (
      <CounterPage
        count={count}
        onClick={handleClick}
      />
    );
}