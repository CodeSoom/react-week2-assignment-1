import React, { useState, useCallback } from 'react';

import NumberPage from './NumberPage';

function App() {
  const [number, setNumber] = useState(0);
  const handleAddNumber = useCallback(
    (numberToAdd) => {
      setNumber(number + numberToAdd);
    },
    [number],
  );

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <NumberPage onClick={handleAddNumber} numberToShow={number} />
    </div>
  );
}

export default App;
