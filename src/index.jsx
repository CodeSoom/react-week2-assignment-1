import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function addByOne() {
    setState({
      count: count + 1,
    });
  }

  function addByClickedNumber(clickedNumber) {
    setState({
      count: count + clickedNumber,
    });
  }

  return (
    <Page
      count={count}
      addByOne={addByOne}
      addByClickedNumber={addByClickedNumber}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
