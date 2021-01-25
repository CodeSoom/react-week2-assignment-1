import React, { useState, useCallback } from 'react';
import AddOneButton from './AddOneButton';
import HeaderTitile from './HeaderTitile';
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
      <HeaderTitile />
      <AddOneButton handleAddOne={handleAddOne} numberToShow={number} />
      <br />
      {[1, 2, 3, 4, 5].map((numberToAdd) => (
        <AddSpecificNumberButton
          numberToAdd={numberToAdd}
          handleAddSpecificNumber={() => {
            handleAddSpecificNumber(numberToAdd);
          }}
          key={numberToAdd}
        />
      ))}
    </div>
  );
}

export default App;
