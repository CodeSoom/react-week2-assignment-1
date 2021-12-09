import { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickCounter() {
    setState({
      count: count + 1,
    });
  }

  function handleClickButton(i) {
    setState({
      count: count + i,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClickCounter}
      onClickButton={handleClickButton}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
