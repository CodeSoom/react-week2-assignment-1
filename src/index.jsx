import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page';


function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(conditionValue) {
    if (conditionValue > 0) {
      setState({
        count: count + conditionValue,
      });
      return 0;
    }
    setState({
      count: count + 1,
    });
    return 0;
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
