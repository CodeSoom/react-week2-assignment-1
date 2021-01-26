import React, { useState, useCallback } from 'react';

import AddOneButton from './AddOneButton';
import AddSpecificNumberButton from './AddSpecificNumberButton';

function App() {
  const [number, setNumber] = useState(0);

  const handleAddOne = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  const handleAddSpecificNumber = useCallback(
    (numberToAdd) => {
      setNumber(number + numberToAdd);
    },
    [number],
  );

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <AddOneButton onClick={handleAddOne} numberToShow={number} />
      <br />
      {[1, 2, 3, 4, 5].map((numberToAdd) => (
        <AddSpecificNumberButton
          numberToAdd={numberToAdd}
          onClick={() => {
            handleAddSpecificNumber(numberToAdd);
          }}
          key={numberToAdd}
        />
      ))}
    </div>
  );
}

export default App;
