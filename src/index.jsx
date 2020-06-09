import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ClickButton({ count, onClick }) {
  return (
    <p>
      <button type="button" onClick={onClick}>
        Click me! (
        { count }
        )
      </button>
    </p>
  );
}

function NumberButton({ number, onClick }) {
  // console.log(number);
  return (
    <button type="button" onClick={() => onClick(number)}>
      { number }
    </button>
  );
}

function NumberButtonList({ onClick }) {
  return [1, 2, 3, 4, 5].map(
    (i) => (<NumberButton number={i} key={i} onClick={onClick} />),
  );
}


function App() {
  const [count, setCount] = useState(0);

  function handleClick(i) {
    setCount(count + i);
  }

  return (
    <div>
      <p>counter</p>
      <ClickButton count={count} onClick={() => setCount(count + 1)} />
      <NumberButtonList onClick={handleClick} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
