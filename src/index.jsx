import { useState } from 'react';
import ReactDOM from 'react-dom';
import ClickMeButton from './ClickMeButton';
import NumberButtons from './NumberButtons';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(number) {
    setCount((value) => value + number);
  }

  return (
    <>
      <p>Counter</p>
      <ClickMeButton count={count} onClick={handleClick} />
      <NumberButtons onClick={handleClick} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
