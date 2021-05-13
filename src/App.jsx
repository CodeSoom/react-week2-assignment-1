import React, { useState } from 'react';

import Counter from './pages/counter';

function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;

  function handleClick(value) {
    setState({ count: count + value });
  }

  return <Counter count={count} onClick={handleClick} />;
}
export default App;
