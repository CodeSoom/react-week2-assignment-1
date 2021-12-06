import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prevCount) => prevCount + 1);

  const handleClickNumber = (number) => setCount((prevCount) => prevCount + number);

  return (
    <Page
      count={count}
      handleClick={handleClick}
      handleClickNumber={handleClickNumber}
    />

  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
