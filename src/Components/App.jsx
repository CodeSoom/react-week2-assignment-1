import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  return <Page count={count} setCount={setCount} />;
}

export default App;
