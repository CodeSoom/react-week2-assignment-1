import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './containers/Counter';

function App() {
  return (
    <Counter />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
