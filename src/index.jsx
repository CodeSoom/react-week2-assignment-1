import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(value = 1) {
    setState({
      count: count + value,
    });
  }

  return (
    <div>
      <Page
        count={count}
        handleClick={handleClick}
        handleClickNumber={handleClick}
      />
    </div>

  );
}

ReactDOM.render(<App />, document.getElementById('app'));
