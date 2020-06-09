import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './page';

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

  function handleClickNumber(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <div>
      <Page
        count={count}
        handleClick={handleClick}
        handleClickNumber={handleClickNumber}
      />
    </div>

  );
}

ReactDOM.render(<App />, document.getElementById('app'));
