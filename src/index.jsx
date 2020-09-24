import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function Clickme() {
    setState({
      count: count + 1,
    });
  }

  function ButtonClick(i) {
    setState({
      count: count + i,
    });
  }

  return (
    <Page
      count={count}
      onClick={Clickme}
      ButtonClick={ButtonClick}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
