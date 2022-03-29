import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from '../components/Page';
import Buttons from '../components/Buttons';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  function addClickNumber(i) {
    setState({
      count: count + i,
    });
  }

  return (
    <>
      <Page
        count={count}
        onClick={handleClick}
      />
      <Buttons
        onClick={addClickNumber}
      />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
