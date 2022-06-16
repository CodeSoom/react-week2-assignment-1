import React, { useState } from 'react';
import Button from './Button';
import CountButtons from './CountButtons';

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (number) => {
    setCount((prevCount) => (prevCount + number));
  };

  return (
    <>
      <p>Counter</p>
      <p>
        <Button onClick={() => onClickButton(1)}>{`Click me! (${count})`}</Button>
      </p>
      <CountButtons onClick={onClickButton} />
    </>
  );
}

export default App;
