import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [{ count }, setState] = useState({ count: 0 });

  function onClickCounter() {
    setState({ count: count + 1 });
  }

  function onClickNumber(number) {
    setState({ count: count + number });
  }

  return <Page count={count} onClickCounter={onClickCounter} onClickNumber={onClickNumber} />;
}

export default App;
