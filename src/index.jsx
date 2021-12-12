import { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function onClick(increment) {
    setState({
      count: count + increment,
    });
  }

  return (
    <Page
      count={count}
      onClick={onClick}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
