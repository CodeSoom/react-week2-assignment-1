import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './component/Page';
import { numbserIndexWithincreaseFunction } from './api/increaseFunction';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleIncreaseButtonClick(increase) {
    setState({
      count: increase(count),
    });
  }

  return (
    <Page
      count={count}
      buttonIndexs={numbserIndexWithincreaseFunction(5)}
      onClick={handleIncreaseButtonClick}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
