import React from 'react';
import ReactDom from 'react-dom';

import Count from './pages/Count';

function App() {
  return <Count />;
}

ReactDom.render(<App />, document.getElementById('app'));
