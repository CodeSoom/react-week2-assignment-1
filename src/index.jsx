import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ClickMeButton from './components/clickMeButton';
import ButtonMaker from './components/buttonMaker';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handelClick() {
    setState({
      count: count + 1,
    });
  }

  const onClickChange = (i) => setState({ count: count + i });

  return (
    <div>
      <p>Counter</p>
      <ClickMeButton
        count={count}
        handelClick={handelClick}
      />
      {[1, 2, 3, 4, 5].map((i) => (
        <ButtonMaker
          value={i}
          onClickChange={onClickChange}
        />
      ))}
    </div>
  );
}
