import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import ButtonClickme from './ButtonClickme';
import ButtonNumber from './ButtonNumber';

function App() {
  const [count, setCount] = useState(0);
  function handleClickCount() {
    setCount(count + 1);
  }

  function handleClickNumber(value) {
    setCount(count + value);
  }

  return (
    <div>
      <Title />
      <p>
        <ButtonClickme value={count} onClick={handleClickCount} />
      </p>
      <p>
        <ButtonNumber onClick={handleClickNumber} />
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
