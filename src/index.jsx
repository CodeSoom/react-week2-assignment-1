import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './containers/Counter';

function App() {
  return (
    <>
      <h1>Counter</h1>
      <Counter />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
