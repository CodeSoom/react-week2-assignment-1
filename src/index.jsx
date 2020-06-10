import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Page from './Component/Page';

function App() {
  const [state, setState] = useState({ count: 0 });

  const { count } = state;

  function handleClickButton() {
    setState({ count: count + 1 });
  }

  function handleClickNumber(number) {
    setState({ count: count + number });
  }

  return (
    <Page
      count={count}
      handleClickButton={handleClickButton}
      handleClickNumber={handleClickNumber}
    />
  );
}

ReactDom.render(<App />, document.getElementById('app'));
