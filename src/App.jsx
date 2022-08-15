import { useState } from 'react';
import ClickMeButton from './ClickMeButton';
import NumberButtons from './NumberButtons';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleCountChange(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <div>
      <p>Counter</p>
      <ClickMeButton
        count={count}
        onClickButton={handleCountChange}
      />
      <NumberButtons
        onClickButton={handleCountChange}
      />
    </div>
  );
}
