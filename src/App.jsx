import { useState } from 'react';
import ClickMeButton from './ClickMeButton';
import NumberButtons from './NumberButtons';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickMe() {
    setState({
      count: count + 1,
    });
  }

  function handleNumberButton(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <div>
      <p>Counter</p>
      <ClickMeButton
        count={count}
        handleClickMe={handleClickMe}
      />
      <NumberButtons
        handleNumberButton={handleNumberButton}
      />
    </div>
  );
}
