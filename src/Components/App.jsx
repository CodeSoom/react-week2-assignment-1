import { useState } from 'react';

import Page from './Page';

const App = () => {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = (step) => {
    setState({
      count: count + step,
    });
  };

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
};

export default App;
