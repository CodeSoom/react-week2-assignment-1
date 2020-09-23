import React, { useState } from 'react';

import ClickMeButton from './components/ClickMeButton';
import Button from './components/Button';
import ActionByValueButtons from './components/ActionByValueButtons';
import NumberInput from './components/NumberInput';

function App() {
  const [state, setState] = useState({ count: 0, input: 0 });
  const { count, input } = state;

  function handleClick(value) {
    setState({ ...state, count: count + value });
  }

  function handleChange(e) {
    setState({ ...state, input: parseInt(e.target.value, 10) });
  }

  return (
    <div>
      <p>Counter</p>
      <p>
        <ClickMeButton
          value={count}
          onClick={() => handleClick(1)}
        />
      </p>
      <p>
        <ActionByValueButtons
          valueList={[1, 2, 3, 4, 5]}
          onClick={handleClick}
        />
      </p>
      <p>
        <NumberInput
          value={input}
          onChange={handleChange}
        />
        <Button
          value="increase"
          onClick={() => handleClick(input)}
        />
      </p>
    </div>
  );
}

export default App;
