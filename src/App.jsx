import { useState } from 'react';

import Counter from './components/Counter';
import Buttons from './components/Buttons';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickButton(number = 1) {
    setState({
      count: count + number,
    });
  }

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={handleClickButton}
      />
      <Buttons onClick={handleClickButton} />
    </div>
  );
}
