/* eslint-disable linebreak-style */
import React, { useState } from 'react';

// 컴포넌트
import Counter from './Counter';
import NumberButtonList from './NumberButtonList';
import ResetButton from './ResetButton';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClickCounter() {
    setCount(count + 1);
  }

  function handleClickNumberButton(number = 0) {
    setCount(count + number);
  }

  function handleClickResetButton() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Counter</h1>

      <Counter count={count} onClick={handleClickCounter} />

      <NumberButtonList onClick={handleClickNumberButton} />

      <ResetButton onClick={handleClickResetButton} />
    </div>
  );
}
