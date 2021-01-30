import React, { useReducer } from 'react';
import Title from './Title';
import ButtonClickme from './ButtonClickme';
import ButtonNumber from './ButtonNumber';
import Reducer from './Reducer';

function App() {
  const [count, dispatch] = useReducer(Reducer, 0);

  function handleClickCount() {
    dispatch({ type: 'CLICKCOUNT', value: 1 });
  }

  function handleClickNumber(number) {
    dispatch({ type: 'CLICKNUMBER', value: number });
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

export default App;
