import React from 'react';

function AddSpecificNumberButton({ onClick, numberToAdd }) {
  return <button type="button" onClick={onClick}>{numberToAdd}</button>;
}

export default AddSpecificNumberButton;
