import React from 'react';
import Page from './Page';

function App() {
  const (state, setState) = useState({
    count: 0,
    countOne: 1,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
      countOne: count + 1,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

export default App;
