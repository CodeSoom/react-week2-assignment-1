import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';

function App() {
  return (
    <>
      <h1>Counter</h1>
      <Counter />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
