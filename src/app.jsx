import React, { useCallback, useMemo, useState } from 'react';
import Button from './button';
import ButtonList from './buttonList';
import { MemoizedAppName } from './title';

const setNumbers = (numberLength) =>
  new Array(numberLength).fill().map((_, index) => index + 1);

function App() {
  const [count, setCount] = useState(0);
  const [maxButtonNumber, setMaxButtonNumber] = useState(5);
  const buttonNumbers = useMemo(
    () => setNumbers(maxButtonNumber),
    [maxButtonNumber],
  );

  const handleClick = useCallback((number) => {
    setCount((previousCount) => previousCount + number);
  }, []);

  const handleAddNumberButtonClick = useCallback(() => {
    setMaxButtonNumber((previousNumber) => previousNumber + 1);
  }, []);

  return (
    <>
      <h1>CodeSoom - week2 assignment - 1</h1>
      <MemoizedAppName text="Counter" />
      <Button onClick={() => handleClick(1)}>{`Click me!(${count})`}</Button>
      <ButtonList numbers={buttonNumbers} onClick={handleClick} />
      <br />
      <Button onClick={handleAddNumberButtonClick}>
        Add number to button list!
      </Button>
    </>
  );
}

export default App;
