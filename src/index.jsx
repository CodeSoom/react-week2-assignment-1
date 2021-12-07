import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './components/Page';

function App() {
  const [state, setState] = useState({ count: 0 });

  const { count } = state;

  function onClickCounter() {
    setState({ count: count + 1 });
  }

  function onClickNumber(number) {
    setState({ count: count + number });
  }
  return <Page count={count} onClickCounter={onClickCounter} onClickNumber={onClickNumber} />;
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
