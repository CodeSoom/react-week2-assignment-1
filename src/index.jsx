import React, { useState } from 'react';
import ReactDom from 'react-dom';

import ClickMeButton from './ClickMeButton';
import Buttons from './Buttons';

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  const handleClick = (number) => {
    setState({
      count: count + number,
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <ClickMeButton count={count} onClick={handleClick} />
      <Buttons onClick={handleClick} />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
