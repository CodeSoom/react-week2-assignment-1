import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prevCount) => prevCount + 1);

  const handleClickNumber = (number) => setCount((prevCount) => prevCount + number);

  return (
    <div>
      <Title />
      <br />
      <button type="button" onClick={handleClick}>
        Click me! (
        {count }
        )
      </button>
      <br />
      <br />
      {[1, 2, 3, 4, 5].map((number) => (
        <button type="button" onClick={() => handleClickNumber(number)}>
          {number}
        </button>
      ))}
    </div>

  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
