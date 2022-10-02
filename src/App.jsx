import { useState } from 'react';
import Page from './Page';

export default function App() {
  const buttonList = [1, 2, 3, 4, 5];
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleClick() {
    setState({ count: count + 1 });
  }

  function handleClickByNumber(i) {
    setState({ count: count + i });
  }

  return (
    <div>
      <Page
        count={count}
        onClick={handleClick}
        buttonList={buttonList}
        handleClickByNumber={handleClickByNumber}
      />
    </div>
  );
}

