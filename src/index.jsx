import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Buttons from './Buttons';
import ClickMeCounter from './ClickMeCounter';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickButton(i) {
    setState({
      count: count + i,
    });
  }

  return (
    <>
      <ClickMeCounter
        count={count}
        onClick={handleClickButton}
      />

      <Buttons
        onClick={handleClickButton}
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
