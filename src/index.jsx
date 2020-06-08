import React, { useState } from 'react';
import ReactDom from 'react-dom';

import ClickMeButton from './ClickMeButton';
import CountupButton from './CountUpButton';

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  const handleCountUp = (number) => {
    setState({
      count: count + number,
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <ClickMeButton count={count} onClick={() => handleCountUp(1)} />
      <br />
      {[1, 2, 3, 4, 5].map((num) => (
        <CountupButton key={num} number={num} onClick={() => handleCountUp(num)} />
      ))}
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
