import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

function App() {
  const buttonList = [1, 2, 3, 4, 5];
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleClick() {
    setState({ count: count + 1 });
  }

  function handleClickDirectPlus(i) {
    setState({ count: count + i });
  }

  return (
    <div>
      <Page
        count={count}
        onClick={handleClick}
        buttonList={buttonList}
        handleClickDirectPlus={handleClickDirectPlus}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
