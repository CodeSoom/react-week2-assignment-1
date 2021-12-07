import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './Page';

function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;
  return (
    <Page count={count} setCount={setState} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
