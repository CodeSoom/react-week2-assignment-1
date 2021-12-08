import { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './Components/Page';

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

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
