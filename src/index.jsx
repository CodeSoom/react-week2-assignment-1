/* @jsx React.createElement */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page/Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleClick(num) {
    if (num) {
      setState({
        count: count + num,
      });
    }
    if (!num) {
      setState({
        count: count + 1,
      });
    }
  }

  return (
    <div>
      <Page count={count} onClick={handleClick} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
