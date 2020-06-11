/* @jsx React.createElement */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './page/Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleClick(num) {
    setState({
      count: count + num,
    });
  }

  return (
    <div>
      <Page count={count} onClick={handleClick} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
