import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ClickMeButton from './ClickMeButton';
import NumberButtonList from './NumberButtonList';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(number) {
    setCount(count + number);
  }

  return (
    <>
      <p>Counter</p>
      <ClickMeButton count={count} onClick={handleClick} />
      <NumberButtonList onClick={handleClick} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
