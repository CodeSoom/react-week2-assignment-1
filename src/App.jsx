import { useState } from 'react';

import ClickableButton from './components/Button/ClickableButton';
import NumberButton from './components/Button/NumberButton';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = (increasingValue) => {
    setState({
      count: count + increasingValue,
    });
  };
  return (
    <div>
      <p>Counter</p>
      <ClickableButton
        count={count}
        onClick={handleClick}
      />
      <NumberButton onClick={handleClick} />
    </div>
  );
}

export default App;
