import React from 'react';
import reactDom from 'react-dom';

import Counter from './Counter';

function App() {
  return <Counter />;
}

reactDom.render(<App />, document.getElementById('app'));
