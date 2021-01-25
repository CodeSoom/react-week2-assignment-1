import React, { useState } from 'react';
import Counter from './counter';
import Buttons from './buttons';

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;
  const buttons = [1, 2, 3, 4, 5];

  function handleClick(addedNumber = 1) {
    setState({
      count: count + addedNumber,
    });
  }
  return (
    <div>
      <p>
        <Counter
          count={count}
          onClick={handleClick}
        />
      </p>
      <p>
        <Buttons
          buttons={buttons}
          onClick={handleClick}
        />
      </p>
    </div>
  );
}

export default App;
