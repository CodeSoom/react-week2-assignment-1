import { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './components/Page';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickNumber(value) {
    setCount(count + value);
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
      onNumberClick={handleClickNumber}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
