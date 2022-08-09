import React, { useState } from 'react';
import Title from './Title';
import ClickMeButton from './ClickMeButton';
import NumberButtons from './NumberButtons';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  return (
    <div>
      <Title />
      <ClickMeButton
        count={count}
      />
      <NumberButtons />
    </div>
  );
}

export default App;
