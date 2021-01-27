import React, { useState, useCallback } from 'react';

import Page from './Page';

function App() {
  const [number, setNumber] = useState(0);
  const handleAddNumber = useCallback(
    (count) => {
      setNumber(number + count);
    },
    [number],
  );

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <Page onClick={handleAddNumber} number={number} />
    </div>
  );
}

export default App;
