import React from 'react';

function AddSpecificNumberButton({ handleAddSpecificNumber, numberToAdd }) {
  return <button type="button" onClick={handleAddSpecificNumber}>{numberToAdd}</button>;
}

export default AddSpecificNumberButton;
