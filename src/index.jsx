import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ClickMeButton from './ClickMeButton';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(number) {
    setCount(count + number);
  }

  return (
    <>
      <p>Counter</p>
      <ClickMeButton count={count} onClick={handleClick} />
      <p>
        {[1, 2, 3, 4, 5].map((i) => <button type="button" onClick={() => handleClick(i)}>{i}</button>)}
      </p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
